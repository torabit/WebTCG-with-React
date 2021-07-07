import React from 'react';
import { Grid } from '@material-ui/core';
import OpponentCardImage from '../atoms/cardImages/OpponentCardImage';

const opponentField = () => {
    const h = [0,1,2,3,4,5,6];
    const b = [0,1,2,3,4];
    const s = [0,1,2,3,4,5];
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
                        <OpponentCardImage/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        {/* handCards */}
                        <Grid container spacing={5}>
                            {h.map(ha =>
                                <Grid item xs={1}>
                                    <OpponentCardImage/>
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
                    <Grid item xs={12}>
                        {/* battleField */}
                        <OpponentCardImage/>
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

export default opponentField;