import React from 'react';
import { Grid } from '@material-ui/core';
import { useRecoilValue } from 'recoil';
import OppDeckImage from '../atoms/cardImages/OppDeckImage';
import OppHandCardImage from '../atoms/cardImages/OppHandCardImage';
import OppSideCardImage from '../atoms/cardImages/OppSideCardImage';
import OppBenchCardImage from '../atoms/cardImages/OppBenchCardImage';
import OppTrashImage from '../atoms/cardImages/OppTrashImage';
import OppBattleFieldImage from '../atoms/cardImages/OppBattleFieldImage';
import oppHandState from '../State/oppHandState';
import oppSideCardState from '../State/oppSideCardState';
import oppBenchState from '../State/oppBenchState';

const OpponentField = () => {
    const oppHand = useRecoilValue(oppHandState);
    const oppSideCard = useRecoilValue(oppSideCardState);
    const oppBench = useRecoilValue(oppBenchState);

    return (
        <Grid container spacing={0}>
            <Grid item xs={3}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        {/* trash */}
                        <OppTrashImage/>
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
                            {Object.keys(oppBench).map(key => 
                                <Grid item xs={2}>
                                    <OppBenchCardImage oppBench={oppBench[key]} index={key}/>
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
                    {Object.keys(oppSideCard).map(key =>
                        <Grid item xs={6}>
                            <OppSideCardImage oppSideCard={oppSideCard[key]} index={key}/>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default OpponentField;