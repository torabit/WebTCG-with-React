const express = require('express');
const router = express();
const http = require('http').createServer(router);
var io = require('socket.io')(http,{
	cors: {
		origin: "*",
	},
});

// config
require('dotenv').config();
const url = process.env.API_BATTLE_URL; // 対戦用api url
const port = process.env.API_BATTLE_PORT; // 対戦用api port

// ルーム管理用配列
let rooms = [];
let player = {};

// express設定
router.use(express.json())
router.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

// httpをlisten
http.listen(port, () => {
	console.log(`Example app listening at ${url}${port}`);
});

router.get('/', (req, res) => {});

io.on('connection', (socket) => {
	let room = '';
	//ユーザーのソケット接続時のイベント
	// console.log('a user connected');

	const twoDice = () => {
		return Math.ceil(Math.random()*6) + Math.ceil(Math.random()*6); 
	}
	// プライベート対戦ルーム入室
	socket.on('private', (userState) => {
		let diceRoll = true;

		player[userState.yourId] =  {
			'deck': userState.deck,
			'hand': [],
			'sideCard': [],
			'bench': [],
			'trash': [],
			'battleField': [],
			'yourTurn': false,
			'prepare': false,
			'dice': 0
		}

		// プライベートルーム作成
		if (rooms.includes(`${userState.oppId}:${userState.yourId}`)) {
			room = `${userState.oppId}:${userState.yourId}`;
			player[userState.yourId].dice = twoDice();

			while(diceRoll) {
				if (player[userState.yourId].dice > player[userState.oppId].dice) {
					player[userState.yourId].yourTurn = true;
					diceRoll = false;
				} else if (player[userState.yourId].dice < player[userState.oppId].dice){
					player[userState.oppId].yourTurn = true;
					diceRoll = false;
				} else {
					player[userState.yourId].dice = twoDice();
					player[userState.oppId].dice = twoDice();
				}
			}

			socket.broadcast.to(room).emit('private_connect', { 
				oppId : `${userState.yourId}` ,
				yourTurn: player[userState.oppId].yourTurn
			});
			io.to(socket.id).emit('private_connect', { 
				oppId : `${userState.oppId}`,
				yourTurn: player[userState.yourId].yourTurn
			});

		} else {
			room = `${userState.yourId}:${userState.oppId}`;
			rooms.unshift(room);
			player[userState.yourId].dice = twoDice();

			io.to(socket.id).emit('private_connect', { oppId : `` });
		}

		socket.join(room);
		console.log(`join:${userState.yourId}`);
		console.log(rooms.length);
	});

	// S05. client_to_serverイベント・データを受信する
    socket.on('client_to_server', function(data) {
        // S06. server_to_clientイベント・データを送信する
        io.to(room).emit('server_to_client', {value : data.value});
    });

	const updateYourField = (yourId) => {
		io.to(socket.id).emit('broadcast', {
			deckSize: player[yourId].deck.length,
			hand: player[yourId].hand,
			sideCard: player[yourId].sideCard,
			trash: player[yourId].trash,
			battleField: player[yourId].battleField,
			yourTurn: player[yourId].yourTurn
		});
		socket.broadcast.to(room).emit('oppBroadcast', {
			oppDeckSize: player[yourId].deck.length,
			oppHand: player[yourId].hand,
			oppBattleField: player[yourId].battleField
		});
	}

	const updateOppField = (oppId) => {
		socket.broadcast.to(room).emit('broadcast', {
			deckSize: player[oppId].deck.length,
			hand: player[oppId].hand,
			sideCard: player[oppId].sideCard,
			trash: player[oppId].trash,
			battleField: player[oppId].battleField
		});
		io.to(socket.id).emit('oppBroadcast', {
			oppDeckSize: player[oppId].deck.length,
			oppHand: player[oppId].hand,
			oppBattleField: player[oppId].battleField
		});
	}

	// 種ポケモン？
	socket.on('noBasic', (userState) => {
		let hand = player[userState.yourId].hand;
		let noBasic = true;
		let basics = hand.map(card => {
			return card.subtypes.filter(subtype => {
				if (subtype === 2) noBasic = false;
			});
		});
		console.log(basics);
		basics = [];
		if (noBasic) io.to(socket.id).emit('getNoBasic', { basic: noBasic });
		else io.to(socket.id).emit('getNoBasic', { basic: noBasic });
	});

	// マリガン
	socket.on('mulligan', (userState) => {
		let handCnt = player[userState.yourId].hand.length;
		for (let i=0; i<handCnt; i++) {
			player[userState.yourId].deck.push(
				player[userState.yourId].hand.pop()
			);
		}
		updateYourField(userState.yourId);
	});

	// 先攻後攻
	socket.on('chooseYourOrder', (userState) => {
		player[userState.yourId].yourTurn = userState.whichOrder;
		player[userState.oppId].yourTurn = !userState.whichOrder;
	});

	// ドロー関数
	socket.on('draw', (userState) => {
		player[userState.yourId].hand.push(
			player[userState.yourId].deck.pop()
		);
		updateYourField(userState.yourId);
	});

	socket.on('oppDraw', (userState) => {
		player[userState.oppId].hand.push(
			player[userState.oppId].deck.pop()
		);
		updateOppField(userState.oppId);
	});

	// サイドカード設置関数
	socket.on('setSideCard', (userState) => {
		player[userState.yourId].sideCard.push(
			player[userState.yourId].deck.pop()
		);
		updateYourField(userState);
	});

	// バトルフィールド設置関数
	socket.on('callToBattleField', (userState) => {
		player[userState.yourId].battleField = player[userState.yourId].hand[userState.index];
		player[userState.yourId].hand.splice(userState.index, 1);
		updateYourField(userState.yourId);
	});

	// トレーナーズカード使用関数
	socket.on('useSpellCard', (userState) => {
		let cardName = player[userState.yourId].hand[userState.index].card_name;

		player[userState.yourId].trash.push(
			player[userState.yourId].hand[userState.index].img_url
		);
		player[userState.yourId].hand.splice(userState.index, 1);
		whichSpells(cardName, userState.yourId, userState.oppId);
		updateYourField(userState.yourId);
	});

	const whichSpells = (cardName, yourId, oppId) => {
		let yourHandCnt = player[yourId].hand.length;
		let oppHandCnt = player[oppId].hand.length;
		switch(cardName) {
			case '博士の研究（アララギ博士）':
				for (let i=0; i<yourHandCnt; i++) {
					player[yourId].trash.push(
						player[yourId].hand[0]
					);
					player[yourId].hand.splice(0, 1);
				}
				for (let i=0; i<7; i++) {
					player[yourId].hand.push(
						player[yourId].deck.pop()
					);
				}
				break;
			case 'マリィ':
				let yourHand = player[yourId].hand;
				for (let i=yourHandCnt-1; 0<i; i--) {
					let r = Math.floor(Math.random() * (i+1));
					let tmp = yourHand[i];
					yourHand[i] = yourHand[r];
					yourHand[r] = tmp;
				}
				for (let i=0; i<yourHandCnt; i++) {
					player[yourId].deck.splice(0, 0, yourHand[i]);
				}
				player[yourId].hand = [];
				for (i=0; i<5; i++) Draw(yourId);
				
				let oppHand = player[oppId].hand;
				console.log(player[oppId].hand);
				for (let i=oppHandCnt-1; 0<i; i--) {
					let r = Math.floor(Math.random() * (i+1));
					let tmp = oppHand[i];
					oppHand[i] = oppHand[r];
					oppHand[r] = tmp;
				}
				for (let i=0; i<oppHandCnt; i++) {
					player[oppId].deck.splice(0, 0, oppHand[i]);
				}
				player[oppId].hand = [];
				for (i=0; i<4; i++) Draw(oppId);
				updateOppField(oppId);
				break;
		}
	}

	// デッキシャッフル関数
	socket.on('shuffleTheDeck', (userState) => {
		let deck = player[userState.yourId].deck
		for (let j=0; j<7; j++) {
			for (let i=(deck.length - 1); 0 < i; i--) {
				let r = Math.floor(Math.random() * (i + 1));
		
				let tmp = deck[i];
				deck[i] = deck[r];
				deck[r] = tmp;
			}
		}
		player[userState.yourId].deck = deck;
	});

	const Draw = (userName) => {
		player[userName].hand.push(
			player[userName].deck.pop()
		);
	}

	// 対戦相手へ送信受信時
	socket.on('you_to_opponent', (test) => {
		console.log(test);
		io.emit("test", test);
	});
	//ソケット切断時のイベント
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});
