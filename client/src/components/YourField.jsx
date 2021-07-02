import React from 'react';
import { Grid } from '@material-ui/core';
import AcceptButton from './common/AcceptButton';
import HandCardImage from './cardImages/HandCardImage';
import DeckImage from './cardImages/DeckImage';
import BattleFieldImage from './cardImages/BattleFieldImage';
import SideCardImage from './cardImages/SideCardImage';
import yourSideCardsState from './State/yourSideCardsState';
import { useRecoilValue } from 'recoil';
import offTurnDisplayState from './State/offTurnDisplayState';
import TrashImage from './cardImages/TrashImage';

const YourField = (props) => {
    const sideCards = useRecoilValue(yourSideCardsState);
    const offTurnDisplay = useRecoilValue(offTurnDisplayState);

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
                            {Object.keys(props.yourHand).map(key =>
                                <Grid item xs={2}>
                                    <HandCardImage handCard={props.yourHand[key]} index={key}/>
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
                        {offTurnDisplay && (
                            <AcceptButton name={'後攻'} isCorrect={props.chooseYourOrder}/>
                        )}
                    </Grid>
                    <Grid item xs={6}>
                        {offTurnDisplay && (
                            <AcceptButton name={'先攻'} isCorrect={props.chooseYourOrder}/>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default YourField;