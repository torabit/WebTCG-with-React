import React,{ useEffect, useState } from 'react';
import {useRecoilState, useSetRecoilState, useRecoilValue} from 'recoil';
import yourHandState from '../State/yourHandState';
import battleFieldState from '../State/battleFieldState';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import trashState from '../State/trashState';
import phaseState from '../State/phaseState';

const CardComands = (props) => {
    const [superTypeButtonText, setSuperTypeButtonText] = useState('');
    const [tcgFunction, setTcgFunction] = useState('');
    const [yourHand, setYourHand] = useRecoilState(yourHandState);
    const setTrash = useSetRecoilState(trashState);
    const setBattleField = useSetRecoilState(battleFieldState);
    const phase = useRecoilValue(phaseState);

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
    
    const resetYourHand = (index) => {
        return new Promise(resolve => {
            setTimeout(() => {
                yourhands.splice(index, 1);
                setYourHand(yourhands);
                resolve();
            },);
        });
    }
    
    const callToBattleField = async (index) => {
        setBattleField(yourhands[index]);
        props.handleClose();
        await resetYourHand(index);
    }

    const useSpellCard = async (index) => {
        const newCard = yourhands[index];
        setTrash((prev) => [...prev, newCard]);
        props.handleClose();
        await resetYourHand(index);
    }

    const useEnergyCard = async (index) => {
        const newCard = yourhands[index];
        setTrash((prev) => [...prev, newCard]);
        props.handleClose();
        await resetYourHand(index);
    }

    return(
        <Menu
            id="simple-menu"
            anchorEl={props.anchorEl}
            keepMounted
            open={Boolean(props.anchorEl)}
            onClose={props.handleClose}
        >
            {(phase === 0 && props.supertype !== 1) ||(
                <MenuItem onClick={() => tcgFunction(props.index)}>{superTypeButtonText}</MenuItem>
            )}
        </Menu>
    );
}

export default CardComands;