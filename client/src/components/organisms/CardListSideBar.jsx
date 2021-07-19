import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AcceptButton from '../atoms/AcceptButton'
import UserNameContext from '../Context/UserNameContext';
import turnDisplayState from '../State/turnDisplayState';
import Io from 'socket.io-client';

const drawerWidth = 300;
const BATTLE_URL = process.env.REACT_APP_API_BATTLE_URL; // 対戦用api url

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		marginTop: '2%',
		width: drawerWidth,
	},
	drawerContainer: {
		overflow: 'auto',
	},
}));

const CardListSideBar = (props) => {
	const classes = useStyles();
	const history = useHistory();
	const userName = useContext(UserNameContext);
	const setTurnDisplay = useSetRecoilState(turnDisplayState);
	const socket = Io(BATTLE_URL);
	window.socket = socket;
	
	const fixDeck = (deckCards) => {
		deckCards.forEach((card) => {
			for (let i=0; i<card.number_of_cards - 1; i++) {
				const newCard = Object.assign({},card);
				delete newCard.number_of_cards;
				deckCards.push(newCard);
			}
			delete card.number_of_cards;
		});
		return deckCards;
	}
	
	const isCorrect = () => {
		let deckCards = [...props.cards];
		let newDeck = fixDeck(deckCards);
		for(let i=0; i<60; i++) {
			newDeck[i].ingame_id = `${userName.yourId}:${i + 1}`;
		}
		if (socket !== undefined) {
			socket.emit('private', {
				yourId: userName.yourId,
                oppId: props.oppId,
				deck: newDeck
            });
            socket.on('private_connect', (json) => {
				if (json.oppId) {
					setTurnDisplay(json.whichTurn);
					history.push({
						pathname: '/competitive',
						state: { 
							yourId: userName.yourId,
							oppId: props.oppId
						}
					});
                }
            });
        }
		console.log(newDeck);
	}

	return (
		<Drawer
			className={classes.drawer}
			variant="permanent"
			classes={{
				paper: classes.drawerPaper,
			}}
			anchor="right"
		>
			<div className={classes.drawerContainer}>
					<List>
						{props.cards.map((card) => (
							<ListItem button key={card.card_id}>
								<ListItemText primary={card.card_name}/>
								<p>{card.number_of_cards}</p>	
							</ListItem>
						))}
					</List>
					<Divider/>
					<List>
						<AcceptButton isCorrect={isCorrect} name={'プレイ'}/>
					</List>
			</div>
		</Drawer>
	);
}

export default CardListSideBar;