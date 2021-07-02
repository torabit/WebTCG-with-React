import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Card from './Card';
import CreatePlace from './CreatePlace';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        height: '100%',
    },
    cardStyles : {
        // display: 'flex', 
        // flexDirection:'row',
        // flexWrap: 'wrap',
        width: '80%',
        height: '100%',
    },
}));

const CreateDecks = (props) => { 
    const [cardlist, setCardlist] = useState([]);
    const [cardDetails, setCardDetails] = useState([]);
    const [count, setCount] = useState(0);
    const classes = useStyles();
    
    useEffect(() => {
        // async を 関数としないと謎のエラーが出たので関数にしました。
        async function fetchData() {
            const res = await Axios.post('http://localhost:3001/getcards')
            const json = await res.data[0];
            setCardlist(json.cardlist);
        }
        fetchData();
    },[props, setCardlist]);
    
    const isCorrect = (e) => {
        let ok = true;
        cardDetails.some((detail) => {
            if (detail.array.pokemon_card_id === e.pokemon_card_id) {
                if (detail.array.count < 4) {
                    detail.array.count += 1;
                    setCount(prevState => prevState + 1);
                }
                ok = false;
            }
            return false;
        });
        if (ok) {
            const array = e;
            array['count'] = 1;
            setCardDetails([...cardDetails, {array}]);
            setCount(prevState => prevState + 1);
        }
    }

    return (
        <div className={classes.root}>
            <GridList　className={classes.cardStyles} cols={7}>
                {cardlist.map((pokeca) =>
                    <GridListTile key={pokeca.pokemon_card_id} style={{height: 'none'}}>
                        <Card pokeca={pokeca} isCorrect={isCorrect}/>
                    </GridListTile>
                )}
            </GridList>
            <CreatePlace
                className={classes.createPlaceStyles}
                count={count}
                cardDetails={cardDetails}
                setBool={props.setBool}
            />
        </div>
    );
}
export default CreateDecks;