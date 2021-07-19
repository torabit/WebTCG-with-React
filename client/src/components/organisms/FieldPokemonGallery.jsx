import React, {useContext} from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PokemonGalleryImage from '../atoms/cardImages/PokemonGaleryImage';
import displayGiveEnergyState from '../State/displayGiveEnergyState';
import battleFieldState from '../State/battleFieldState';
import benchState from '../State/benchState';
import countState from '../State/countState';
import choosenCardsState from '../State/choosenCardsState';
import howManyState from '../State/howManyState';
import ingameIdState from '../State/ingameIdState';
import UserNameContext from '../Context/UserNameContext';

const FieldPokemonGallery = () => {
	const [open, setOpen] = React.useState(true);
    const battleField = useRecoilValue(battleFieldState);
    const bench = useRecoilValue(benchState);
    const [choosenCards,　setChoosenCards] = useRecoilState(choosenCardsState);
    const ingameId = useRecoilValue(ingameIdState);
    const userName = useContext(UserNameContext);
    const howMany = useRecoilValue(howManyState);
	const [count, setCount] = useRecoilState(countState);
    const [displayGiveEnergy, setDisplayGiveEnergy] = useRecoilState(displayGiveEnergyState);

	const handleClose = () => {
		setOpen(false);
        setChoosenCards([]);
        setCount(0);
		if (displayGiveEnergy) setDisplayGiveEnergy(false);
	};

    const setEnergyToPokemon = () => {
        if (howMany === count) {
            // エナジーを追加するポケモンIDと追加するエナジーのカードIDをAPIに送って
            // ポケモンIDのEnergyDetailにエナジーカードのDetail、
            // energyCntに紐づいている属性のカウントをPlusする
            window.socket.emit('giveEnergy', {
                yourId: userName.yourId,
                oppId: userName.oppId,
                ingameId: ingameId,
                getCards: choosenCards,
            });
        }
        setOpen(false);
        setChoosenCards([]);
        setCount(0);
        setDisplayGiveEnergy(false);
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
        <Dialog
            open={open}
            fullWidth={true}
            maxWidth={'md'}
            onClose={handleClose}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
        <DialogTitle id="scroll-dialog-title">{'あなたのフィールドステータス'}</DialogTitle>
        <DialogContent>
            <DialogContentText> {'バトル場'} </DialogContentText>
                <PokemonGalleryImage card={battleField} ingameId={battleField.ingame_id}/>
            <DialogContentText> {'ベンチ'} </DialogContentText>
                {Object.keys(bench).map(key => 
                    <PokemonGalleryImage key={bench[key].ingame_id} card={bench[key]} ingameId={bench[key].ingame_id}/>	
                )}
        </DialogContent>
        <DialogActions>
            <Button onClick={setEnergyToPokemon} color="secondary">
                確定
            </Button>
        </DialogActions>
        </Dialog>
	);
}

export default FieldPokemonGallery;