import React,{ useEffect, useState, useContext, useCallback } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import HandsState from '../State/handsState';
import battleFieldState from '../State/battleFieldState';
import requireCostState from '../State/requireCostState';
import howManyState from '../State/howManyState';
import contentTextState from '../State/contentTextState';
import UserNameContext from '../Context/UserNameContext';
import galleryState from '../State/galleryState';
import searchSortState from '../State/searchSortState';
import cardNameState from '../State/cardNameState';
import displayGiveEnergyState from '../State/displayGiveEnergyState';
import ingameIdState from '../State/ingameIdState';
import benchState from '../State/benchState';
import oppBenchState from '../State/oppBenchState';

const CardComands = (props) => {
    const [superTypeButtonText, setSuperTypeButtonText] = useState('');
    const [tcgFunction, setTcgFunction] = useState('');
    const hands = useRecoilValue(HandsState);
    const battleField = useRecoilValue(battleFieldState);
	const setContentText = useSetRecoilState(contentTextState);
    const setHowMany = useSetRecoilState(howManyState);
    const setRequireCost = useSetRecoilState(requireCostState);
    const setGallery = useSetRecoilState(galleryState);
    const setCardName = useSetRecoilState(cardNameState);
    const setSearchSort = useSetRecoilState(searchSortState);
    const userName = useContext(UserNameContext);
    const setDisplayGiveEnergy = useSetRecoilState(displayGiveEnergyState);
    const setIngameId = useSetRecoilState(ingameIdState);
    const bench = useRecoilValue(benchState);
    const oppBench = useRecoilValue(oppBenchState);
    
    const cardComandsFunc = useCallback(() => {
        let newHands = [...hands];

        switch (props.supertype) {
            case 0:
                setSuperTypeButtonText('ポケモンにつける');
                setTcgFunction(() => useEnergyCard);
                break;
            case 1:
                if (battleField.length === 0) {
                    setSuperTypeButtonText('バトル場に出す');
                    setTcgFunction(() => callToBattleField);
                    break;
                } else {
                    setSuperTypeButtonText('ベンチに出す');
                    setTcgFunction(() => callToBench);
                    break;
                }
            case 2:
                setSuperTypeButtonText('使用する');
                setTcgFunction(() => useSpellCard);
                break;
            default:
                console.log('nothing');
        }
        
        const callToBattleField = async (ingameId) => {
            window.socket.emit('callToBattleField', { 
                yourId: userName.yourId, 
                oppId: userName.oppId,
                ingameId: ingameId
            });
            props.handleClose();
        }
    
        const callToBench = async (ingameId) => {
            window.socket.emit('callToBench', {
                yourId: userName.yourId, 
                oppId: userName.oppId,
                ingameId: ingameId
            });
            props.handleClose();
        }
    
        const useSpellCard = async (ingameId) => {
            let newYourHands = [...newHands];
            let index = 0;
            for (let i=0; i<newYourHands.length; i++) {
                if(newYourHands[i].ingame_id === ingameId) index = i;
            }
            switch(props.cardName) {
                case 'クイックボール':
                    newYourHands.splice(index, 1);
                    setGallery(newYourHands);
                    setContentText('クイックボール: トラッシュするカードを1枚選んでください');
                    setHowMany(1);
                    setIngameId(ingameId);
                    setRequireCost(true);
                    setCardName(props.cardName);
                    break;
                case 'ポケモン通信':
                    newYourHands.splice(index, 1);
                    setGallery(newYourHands);
                    setContentText('ポケモン通信: デッキに戻すポケモンを1枚選んでください');
                    setHowMany(1);
                    setIngameId(ingameId);
                    setRequireCost(true);
                    setCardName(props.cardName);
                    setSearchSort(1);
                    break;
                case 'ポケモンいれかえ':
                    setGallery(bench);
                    setContentText('ポケモンいれかえ: 自分のバトルポケモンをベンチポケモンと入れ替える');
                    setHowMany(1);
                    setIngameId(ingameId);
                    setRequireCost(true);
                    setCardName(props.cardName);
                    break;
                case 'ボスの指令（フラダリ）':
                    setGallery(oppBench);
                    setContentText('ボスの指令: 相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える');
                    setHowMany(1);
                    setIngameId(ingameId);
                    setRequireCost(true);
                    setCardName(props.cardName);
                    break;
                default :
                    window.socket.emit('useSpellCard', {
                        yourId: userName.yourId,
                        oppId: userName.oppId,
                        ingameId: ingameId
                    });
            }
            props.handleClose();
        }
    
        const useEnergyCard = async (ingameId) => {
            setHowMany(1);
            setIngameId(ingameId);
            setDisplayGiveEnergy(true);
            props.handleClose();
        }
    },[
        battleField.length, setContentText, setGallery, 
        props, setHowMany, setDisplayGiveEnergy,
        setRequireCost, setCardName, setSearchSort,
        userName.oppId, userName.yourId, hands,
        setIngameId, bench
    ]);

    useEffect(() => {
        cardComandsFunc();
    },[cardComandsFunc]);

    return(
        <Menu
            id="simple-menu"
            anchorEl={props.anchorEl}
            keepMounted
            open={Boolean(props.anchorEl)}
            onClose={props.handleClose}
        >
            {/* 関数ごとにボタンの表示や非表示を実装する予定 */}
            <MenuItem onClick={() => tcgFunction(props.ingameId)}>{superTypeButtonText}</MenuItem>
        </Menu>
    );
}

export default CardComands;