import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import OpponentCardImage from '../atoms/cardImages/OpponentCardImage';
import OppDeckImage from '../atoms/cardImages/OppDeckImage';
import OppBattleFieldImage from '../atoms/cardImages/OppBattleFieldImage';
import OppHandCardImage from '../atoms/cardImages/OppHandCardImage';
import oppHandState from '../State/oppHandState';
import oppDeckState from '../State/oppDeckState';
import oppBattleFieldState from '../State/oppBattleFieldState';

const OpponentField = () => {
    const [oppHand, setOppHand] = useRecoilState(oppHandState);
    const setOppDeck = useSetRecoilState(oppDeckState);
    const setOppBattleField = useSetRecoilState(oppBattleFieldState);
    const b = [0,1,2,3,4];
    const s = [0,1,2,3,4,5];

    // useEffect(() => {
    //     window.socket.on('oppBroadcast', players => {
    //         setOppDeck(players.oppDeckSize);
    //         setOppHand(players.oppHand);
    //         setOppBattleField(players.oppBattleField);
    //     });
    //     return () => {
    //         console.log('Disconnecting..');
    //         window.socket.current.disconnect();
    //     };
    // },[]);

    return (
        <Grid container spacing={0}>
            <Grid item xs={3}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        {/* trash */}
                        <OpponentCardImage/>
                    </Grid>
                    <Grid item xs={12}>
                        {/* deck */}
                        <OppDeckImage/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        {/* handCards */}
                        <Grid container spacing={0}>
                            {Object.keys(oppHand).map(key => 
                                <Grid item xs={1}>
                                    <OppHandCardImage oppHandCard={oppHand[key]} index={key}/>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        {/* benchCards */}
                        <Grid container spacing={10}>
                            {b.map(be =>
                                <Grid item xs={2}>
                                    <OpponentCardImage/>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                    <Grid container spacing={10}>
                        {/* battleField */}
                        <Grid item xs={9}>
                            <OppBattleFieldImage/>
                        </Grid>
                        <Grid item xs={3}/>
                    </Grid>
                </Grid>
            </Grid>
            {/* sideCards */}
            <Grid item xs={2}>
                <Grid container spacing={0}>
                    {s.map(si =>
                        <Grid item xs={6}>
                            <OpponentCardImage/>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default OpponentField;