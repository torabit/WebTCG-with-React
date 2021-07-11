import React from 'react';
import { Grid } from '@material-ui/core';
import AcceptButton from '../atoms/AcceptButton';
import HandCardImage from '../atoms/cardImages/HandCardImage';
import DeckImage from '../atoms/cardImages/DeckImage';
import BattleFieldImage from '../atoms/cardImages/BattleFieldImage';
import SideCardImage from '../atoms/cardImages/SideCardImage';
import yourSideCardsState from '../State/yourSideCardsState';
import { useRecoilValue } from 'recoil';
import turnDisplayState from '../State/turnDisplayState';
import TrashImage from '../atoms/cardImages/TrashImage';
import yourHandState from '../State/yourHandState';

const YourField = (props) => {
    const sideCards = useRecoilValue(yourSideCardsState);
    const turnDisplay = useRecoilValue(turnDisplayState);
    const yourHand = useRecoilValue(yourHandState);

    return(
        <Grid container spacing={0}>
            <Grid item xs={2}>
                <Grid container spacing={0}>
                    {/* サイドカード */}
                    {Object.keys(sideCards).map(key =>
                        <Grid item xs={6}>
                            <SideCardImage sideCards={sideCards[key]} index={key}/>
                        </Grid>
                    )}
                </Grid>
            </Grid>
            <Grid item xs={7}>
                <Grid container spacing={0}>
                    {/* バトル場 */}
                    <Grid item xs={12}>
                        <BattleFieldImage/>
                    </Grid>
                    <Grid item xs={12}>
                        {/* ベンチカード */}
                    </Grid>
                    <Grid item xs={12}>
                        <Grid  container spacing={0}>
                            {/* 手札 */}
                            {Object.keys(yourHand).map(key =>
                                <Grid item xs={1}>
                                    <HandCardImage handCard={yourHand[key]} index={key}/>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid container spacing={0}>
                    {/* ダメカン表示予定場所 */}
                    {/* デッキ */}
                    <Grid item xs={12}>
                        <DeckImage deck={props.deck}/>
                    </Grid>
                    {/* トラッシュ */}
                    <Grid item xs={12}>
                        <TrashImage/>
                    </Grid>
                        <Grid item xs={6}>
                            {turnDisplay && (
                                <AcceptButton 
                                    name={'後攻'} 
                                    isCorrect={() => props.chooseYourOrder(false)}
                                />
                            )}
                        </Grid>
                        <Grid item xs={6}>
                            {turnDisplay && (
                                <AcceptButton 
                                    name={'先攻'} 
                                    isCorrect={() => props.chooseYourOrder(true)}
                                />
                            )}
                        </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default YourField;