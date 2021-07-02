import React,{ useEffect, useState } from 'react';
import {useRecoilState, useSetRecoilState} from 'recoil';
import yourHandState from '../State/yourHandState';
import battleFieldState from '../State/battleFieldState';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import trashState from '../State/trashState';

const CardComands = (props) => {
    const [superTypeButtonText, setSuperTypeButtonText] = useState('');
    const [tcgFunction, setTcgFunction] = useState('');
    const [yourHand, setYourHand] = useRecoilState(yourHandState);
    const setTrash = useSetRecoilState(trashState);
    const setBattleField = useSetRecoilState(battleFieldState);

    const callToBattleField = (index) => {
        let yourhands = [...yourHand];
        setBattleField(yourHand[index]);
        yourhands.splice(index, 1);
        setYourHand(yourhands);
    };

    const useSpellCard = (index) => {
        let yourhands = [...yourHand];
        const newCard = yourHand[index];
        setTrash((prev) => [...prev, newCard]);
        yourhands.splice(index, 1);
        setYourHand(yourhands);
    };

    useEffect(() => {
        switch (props.supertype) {
            case 0:
                setSuperTypeButtonText('ポケモンにつける');
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
    },[]);

    return(
        <Menu
            id="simple-menu"
            anchorEl={props.anchorEl}
            keepMounted
            open={Boolean(props.anchorEl)}
            onClose={props.handleClose}
        >
            <MenuItem onClick={() => tcgFunction(props.index)}>{superTypeButtonText}</MenuItem>
        </Menu>
    );
}

export default CardComands;