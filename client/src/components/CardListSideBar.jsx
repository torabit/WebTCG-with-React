import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AcceptButton from './common/AcceptButton'
import ShuffleTheDeck from './function/ShuffleTheDeck';

const drawerWidth = 300;

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
	
	const isCorrect = () => {
		let deckCards = props;
		deckCards.cards.forEach((card) => {
			for (let i=0; i<card.number_of_cards - 1; i++) deckCards['cards'].push(card);
			delete card.number_of_cards;
		});
		for (let i=0; i < 7; i++) ShuffleTheDeck(deckCards.cards);
		
		history.push({
			pathname: '/competitive',
			state: { deck: deckCards}
		});
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