import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AcceptButton from '../atoms/AcceptButton'
import UserNameContext from '../Context/UserNameContext';
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
	const [socket, setSocket] = useState({});
	
	const fixDeck = () => {
		let deckCards = [...props.cards];
		console.log(deckCards);
		deckCards.forEach((card) => {
			for (let i=0; i<card.number_of_cards - 1; i++) {
				deckCards.push(card);
			}
			delete card.number_of_cards;
		});
		console.log(deckCards);
		return deckCards;
	}

	const isCorrect = () => {
		let newDeck = fixDeck();
		let socketIo = Io(BATTLE_URL);
		setSocket(socketIo);
		
		if (socketIo !== undefined) {
			socketIo.emit('private', {
				yourId: userName,
                opponentId: props.opponentUserName,
				deck: newDeck,
            });
            socketIo.on('private_connect', (json) => {
				if (json.opponentId) {
					console.log(json);
					
					history.push({
						pathname: '/competitive',
						state: { userName: userName }
					});
                }
            });
        }
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