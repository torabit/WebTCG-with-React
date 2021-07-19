import React, { useEffect } from 'react';
import jirachi from '../../image/jirachiWallPaper.jpg'
import { Box, Divider } from '@material-ui/core';
import YourField from '../organisms/YourField';
import { useRecoilState, useSetRecoilState } from 'recoil';
import handsState from '../State/handsState';
import sideCardState from '../State/sideCardState';
import benchState from '../State/benchState';
import battleFieldState from '../State/battleFieldState';
import trashState from '../State/trashState';
import deckState from '../State/deckState';
import UserNameContext from '../Context/UserNameContext';
import OpponentField from '../organisms/OpponentField';
import oppDeckState from '../State/oppDeckState';
import oppHandState from '../State/oppHandState';
import oppSideCardState from '../State/oppSideCardState';
import oppBenchState from '../State/oppBenchState';
import oppTrashState from '../State/oppTrashState';
import oppBattleFieldState from '../State/oppBattleFieldState';
import phaseState from '../State/phaseState';
import whichTurnState from '../State/whichTurnState';
import galleryState from '../State/galleryState';
import displayGalleryState from '../State/displayGalleryState';
import contentTextState from '../State/contentTextState';
import searchSortState from '../State/searchSortState';
import howManyState from '../State/howManyState';
import whichSortState from '../State/whichSortState';
import energyAndToolState from '../State/energyAndToolState';
// import NoBasicDialog from '../molecules/NoBasicDialog';

const Competitive = (props) => {
    const [deck, setDeck] = useRecoilState(deckState);
    const setHand = useSetRecoilState(handsState);
    const setSideCard = useSetRecoilState(sideCardState);
    const setBench = useSetRecoilState(benchState);
    const setPhase = useSetRecoilState(phaseState);
    const setBattleField = useSetRecoilState(battleFieldState);
    const setTrash = useSetRecoilState(trashState);
    const setWhichTurn = useSetRecoilState(whichTurnState);
    const setGallery = useSetRecoilState(galleryState);
    const setDisplayGallery = useSetRecoilState(displayGalleryState);
    const setContentText = useSetRecoilState(contentTextState);
    const setHowMany = useSetRecoilState(howManyState);
    const setSearchSort = useSetRecoilState(searchSortState);
    const setWhichSort = useSetRecoilState(whichSortState);
    const setEnergyAndTool = useSetRecoilState(energyAndToolState);
    // Nobasic工事中です
    // const [noBasic, setNoBasic] = useState(false);
    const userName = {
        yourId: props.location.state.yourId, 
        oppId: props.location.state.oppId
    }
    const setOppDeck = useSetRecoilState(oppDeckState);
    const setOppHand = useSetRecoilState(oppHandState);
    const setOppSideCard = useSetRecoilState(oppSideCardState);
    const setOppBench = useSetRecoilState(oppBenchState);
    const setOppTrash = useSetRecoilState(oppTrashState);
    const setOppBattleField = useSetRecoilState(oppBattleFieldState);

    useEffect(() => {
        window.socket.on('statuses', res => {
            setPhase(res.phase);
            setWhichTurn(res.whichTurn);
        });
        window.socket.on('broadcast', res => {
            setDeck(res.deckSize);
            setHand(res.hand);
            setSideCard(res.sideCard);
            setBench(res.bench);
            setTrash(res.trash);
            setBattleField(res.battleField);
            setEnergyAndTool(res.energyAndTool);
        });
        window.socket.on('oppBroadcast', res => {
            setOppDeck(res.oppDeckSize);
            setOppHand(res.oppHand);
            setOppSideCard(res.oppSideCard);
            setOppBench(res.oppBench);
            setOppTrash(res.oppTrash);
            setOppBattleField(res.oppBattleField);
        });
        window.socket.on('searchRequest', res =>{
            setGallery(res.deck);
            setSearchSort(res.searchSort);
            setContentText(res.contentText);
            setHowMany(res.howMany);
            setWhichSort(res.whichSort);
            setDisplayGallery(res.displayGallery);
        });
        return () => {
            console.log('Disconnecting..');
            window.socket.current.disconnect();
        };
    },[
        setPhase, setWhichTurn, setEnergyAndTool,
        setDeck, setHand, setSideCard, setBench, setTrash, setBattleField, 
        setOppDeck, setOppHand, setOppSideCard, setOppBench, setOppTrash, setOppBattleField, 
        setGallery, setSearchSort, setContentText, setHowMany, setWhichSort, setDisplayGallery
    ]);
        
    // const mulligan = () => {
    //     setNoBasic(false);
    //     window.socket.emit('mulligan', { yourId: userName.yourId });
    //     // chooseYourOrder();
    // }

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
                <YourField deck = {deck}/>
            </UserNameContext.Provider>
            {/* <NoBasicDialog noBasic={noBasic}/> */}
        </Box>
    );
}

export default Competitive;