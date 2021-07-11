import React, { useEffect, useState } from 'react';
import jirachi from '../../image/jirachiWallPaper.jpg'
import { Box, Divider } from '@material-ui/core';
import YourField from '../organisms/YourField';
import ShuffleTheDeck from '../function/ShuffleTheDeck';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import yourHandState from '../State/yourHandState';
import yourSideCardsState from '../State/yourSideCardsState';
import phaseState from '../State/phaseState';
import battleFieldState from '../State/battleFieldState';
import trashState from '../State/trashState';
import turnDisplayState from '../State/turnDisplayState';
import deckState from '../State/deckState';
import UserNameContext from '../Context/UserNameContext';
import OpponentField from '../organisms/OpponentField';
import oppDeckState from '../State/oppDeckState';
import oppBattleFieldState from '../State/oppBattleFieldState';
import oppHandState from '../State/oppHandState';
import NoBasicDialog from '../molecules/NoBasicDialog';

const Competitive = (props) => {
    const [deck, setDeck] = useRecoilState(deckState);
    const [yourHand, setYourHand] = useRecoilState(yourHandState);
    const setYourSideCards = useSetRecoilState(yourSideCardsState);
    const [phase, setPhase] = useRecoilState(phaseState);
    const [battleField, setBattleField] = useRecoilState(battleFieldState);
    const setTrash = useSetRecoilState(trashState);
    const setTurnDisplay = useSetRecoilState(turnDisplayState);
    const [noBasic, setNoBasic] = useState(false);
    const [isPrepare, setIsPrepare] = useState(true);
    const userName = {
        yourId: props.location.state.yourId, 
        oppId: props.location.state.oppId
    }
    const setOppDeck = useSetRecoilState(oppDeckState);
    const setOppHand = useSetRecoilState(oppHandState);
    const setOppBattleField = useSetRecoilState(oppBattleFieldState);

    console.log(yourHand);
    
    // socket通信実装時に修正
    // useEffect(() => {
        // async function fetchDate() {
        //     if (phase === 0) {
        //         setPhase(0);
        //         if (battleField.length !== 0) {
        //             for (let i=0; i<6; i++) {
        //                 await SetSideCards();
        //             }
        //             setPhase(prev => prev+1);
        //         }
        //     } else if (phase === 1) {
        //         await Draw();
        //         console.log('draw');
        //         setPhase(prev => prev+1);
        //     } else if (phase === 2) {
        //         console.log('done draw, now your turn')
        //     }
        // }
    //     fetchDate();
    // },[phase, battleField]);
    useEffect(() => {
        window.socket.on('broadcast', players => {
            setDeck(players.deckSize);
            setYourHand(players.hand);
            setYourSideCards(players.sideCard);
            setTrash(players.trash);
            setBattleField(players.battleField);
        });
        window.socket.on('oppBroadcast', players => {
            setOppDeck(players.oppDeckSize);
            setOppHand(players.oppHand);
            setOppBattleField(players.oppBattleField);
        });
        return () => {
            console.log('Disconnecting..');
            window.socket.current.disconnect();
        };
    },[]);
    
    const setSideCards = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                window.socket.emit('setSideCard', { yourId: userName.yourId});
                resolve();
            },300);
        });
    }

    const draw = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                window.socket.emit('draw', { yourId: userName.yourId });
                resolve();
            },300);
        });
    }

    const oppDraw = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                window.socket.emit('oppDraw', { oppId: userName.oppId });
                resolve();
            },300);
        });
    }
    
    const chooseYourOrder = async (whichOrder) => {
        setTurnDisplay(false);
        window.socket.emit('shuffleTheDeck', { yourId: userName.yourId });
        window.socket.emit('shuffleTheDeck', { yourId: userName.oppId });
        if (whichOrder) {
            for (let i=0; i<7; i++) {
                await draw();
            }
            for (let i=0; i<7; i++) {
                await oppDraw();
            }
        } else {
            for (let i=0; i<7; i++) {
                await oppDraw();
            }
            for (let i=0; i<7; i++) {
                await draw();
            }
        }
        window.socket.emit('noBasic', { yourId: userName.yourId });
        window.socket.on('getNoBasic', bool => {
            setNoBasic(bool.basic);
        });
        window.socket.emit('chooseYourOrder', { 
            yourId: userName.yourId,
            oppId: userName.oppId,
            yourOrder: whichOrder 
        });
    }
        
    const mulligan = () => {
        setNoBasic(false);
        window.socket.emit('mulligan', { yourId: userName.yourId });
        chooseYourOrder();
    }

    return (
        <Box style={{
            backgroundImage: `url(${jirachi})`,
            backgroundSize: 'cover',
            }}
            p={{md: 5}}
        >
            <OpponentField/>
            <Divider/>
            <UserNameContext.Provider value={userName}>
                <YourField 
                    chooseYourOrder={chooseYourOrder}
                    deck = {deck}
                />
            </UserNameContext.Provider>
            <NoBasicDialog noBasic={noBasic} mulligan={mulligan}/>
        </Box>
    );
}

export default Competitive;