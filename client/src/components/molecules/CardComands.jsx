import React,{ useEffect, useState, useContext } from 'react';
import {useRecoilState, useSetRecoilState, useRecoilValue} from 'recoil';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import yourHandState from '../State/yourHandState';
import battleFieldState from '../State/battleFieldState';
import trashState from '../State/trashState';
import phaseState from '../State/phaseState';
import deckState from '../State/deckState';
import oppHandState from '../State/oppHandState';
import UserNameContext from '../Context/UserNameContext';

const CardComands = (props) => {
    const [superTypeButtonText, setSuperTypeButtonText] = useState('');
    const [tcgFunction, setTcgFunction] = useState('');
    const [yourHand, setYourHand] = useRecoilState(yourHandState);
    const setOppHand = useSetRecoilState(oppHandState);
    const setDeck = useSetRecoilState(deckState);
    const setTrash = useSetRecoilState(trashState);
    const setBattleField = useSetRecoilState(battleFieldState);
    const phase = useRecoilValue(phaseState);
    const userName = useContext(UserNameContext);

    let yourhands = [...yourHand];

    const whichSuperTypeFunc = (supertype) => {
        switch (supertype) {
            case 0:
                setSuperTypeButtonText('ポケモンにつける');
                setTcgFunction(() => useEnergyCard);
                break;
            case 1:
                setSuperTypeButtonText('バトル場に出す');
                setTcgFunction(() => callToBattleField);
                break;
            case 2:
                setSuperTypeButtonText('使用する');
                setTcgFunction(() => useSpellCard);
                break;
            default:
                console.log('nothing');
        }
    }

    useEffect(() => {
        whichSuperTypeFunc(props.supertype);
    },[props.handleClick]);
    
    // 削除予定関数
    const updateYourHand = (index) => {
        return new Promise(resolve => {
            setTimeout(() => {
                yourhands.splice(index, 1);
                setYourHand(yourhands);
                resolve();
            },);
        });
    }
    
    const callToBattleField = async (index) => {
        window.socket.emit('callToBattleField', { 
            yourId: userName.yourId, 
            oppId: userName.oppId,
            index: index
        });
        props.handleClose();
    }

    const useSpellCard = async (index) => {
        window.socket.emit('useSpellCard', {
            yourId: userName.yourId,
            oppId: userName.oppId,
            index: index
        });
        props.handleClose();
    }

    const useEnergyCard = async (index) => {
        const newCard = yourhands[index];
        setTrash((prev) => [...prev, newCard]);
        props.handleClose();
        await updateYourHand(index);
    }

    return(
        <Menu
            id="simple-menu"
            anchorEl={props.anchorEl}
            keepMounted
            open={Boolean(props.anchorEl)}
            onClose={props.handleClose}
        >
            {/* {(phase === 0 && props.supertype !== 1) ||(
                <MenuItem onClick={() => tcgFunction(props.index)}>{superTypeButtonText}</MenuItem>
            )} */}
            <MenuItem onClick={() => tcgFunction(props.index)}>{superTypeButtonText}</MenuItem>
        </Menu>
    );
}

export default CardComands;