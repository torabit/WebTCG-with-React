import React, { useContext } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';
import Button from '@material-ui/core/Button';
import AcceptButton from '../atoms/AcceptButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import galleryState from '../State/galleryState';
import contentTextState from '../State/contentTextState';
import CardGalleryImage from '../atoms/cardImages/CardGalleryImage';
import choosenCardsState from '../State/choosenCardsState';
import UserNameContext from '../Context/UserNameContext';
import displayGalleryState from '../State/displayGalleryState';
import requireCostState from '../State/requireCostState';
import HandGalleryImage from '../atoms/cardImages/HandGalleryImage';
import countState from '../State/countState';
import cardNameState from '../State/cardNameState';
import ingameIdState from '../State/ingameIdState';
import howManyState from '../State/howManyState';

const CardGallery = (props) => {
	const [open, setOpen] = React.useState(true);
	const [scroll, setScroll] = React.useState('paper');
	const contentText = useRecoilValue(contentTextState);
	const [choosenCards, setChoosenCards] = useRecoilState(choosenCardsState);
	const [gallery, setGallery] = useRecoilState(galleryState);
	const userName = useContext(UserNameContext);
	const setDisplayGallery = useSetRecoilState(displayGalleryState);
	const [requireCost, setRequireCost] = useRecoilState(requireCostState);
	const [count, setCount] = useRecoilState(countState);
	const cardName = useRecoilValue(cardNameState);
	const ingameId = useRecoilValue(ingameIdState);
    const howMany = useRecoilValue(howManyState);

	const handleClickOpen = (scrollType) => () => {
		setOpen(true);
		setScroll(scrollType);
	};

	const handleClose = () => {
		setOpen(false);
        setChoosenCards([]);
		setCount(0);
		if (requireCost) setRequireCost(false);
	};

	const requestSearch = () => {
		if (requireCost) {
			switch (cardName) {
				case 'ポケモンいれかえ':
					if (choosenCards.length > 0) {
						window.socket.emit('requireCost', {
							yourId: userName.yourId,
							oppId: userName.oppId,
							cardName: cardName,
							ingameId: ingameId,
							choosenCards: choosenCards[0]
						});
					}
					break;
				case 'ボスの指令（フラダリ）':
					if (choosenCards.length > 0) {
						window.socket.emit('requireCost', {
							yourId: userName.yourId,
							oppId: userName.oppId,
							cardName: cardName,
							ingameId: ingameId,
							choosenCards: choosenCards[0],
						});
					}
					break;
				default: 
					if (choosenCards.length > 0) {
						window.socket.emit('requireCost', {
							yourId: userName.yourId,
							oppId: userName.oppId,
							cardName: cardName,
							ingameId: choosenCards[0]
						});
						// costをPayした後に使用するカードのIDをゲームへ送る
						window.socket.emit('useSpellCard', {
							yourId: userName.yourId,
							oppId: userName.oppId,
							ingameId: ingameId
						});
					} 
			}
			setRequireCost(false);
		} else {
			if (howMany === count) {
				window.socket.emit('searchCardsFromDeck', {
					yourId: userName.yourId,
					oppId: userName.oppId,
					getCards: choosenCards,
				});
				setOpen(false);
				setDisplayGallery(false);
			} else {
				console.log('カードを選択してください');
			}
		}
		setGallery([]);
		setChoosenCards([]);
		setCount(0);
	}

	const descriptionElementRef = React.useRef(null);
	React.useEffect(() => {
		if (open) {
			const { current: descriptionElement } = descriptionElementRef;
			if (descriptionElement !== null) {
				descriptionElement.focus();
			}
		}
	}, [open]);

	return (
		<div>
			{!requireCost && (
				<AcceptButton 
					isCorrect={handleClickOpen('paper')}
					name={'デッキ'}
				/>
			)}
			<Dialog
				open={open}
				fullWidth={true}
				maxWidth={'md'}
				onClose={handleClose}
				scroll={scroll}
				aria-labelledby="scroll-dialog-title"
				aria-describedby="scroll-dialog-description"
			>
			<DialogTitle id="scroll-dialog-title">{props.title}</DialogTitle>
			<DialogContent dividers={scroll === 'paper'}>
				<DialogContentText> {contentText} </DialogContentText>
				{!requireCost && (
					Object.keys(gallery).map(key => 
						<CardGalleryImage card={gallery[key]} ingameId={gallery[key].ingame_id}/>	
					)
				)}
				{requireCost && (
					Object.keys(gallery).map(key => 
						<HandGalleryImage card={gallery[key]} ingameId={gallery[key].ingame_id}/>	
					)
				)}
			</DialogContent>
			<DialogActions>
			{!requireCost && (
				<Button onClick={handleClose} color="secondary">
					フィールドを見る
				</Button>
			)}
				<Button onClick={requestSearch} color="secondary">
					確定
				</Button>
			</DialogActions>
			</Dialog>
		</div>
	);
}

export default CardGallery;