import React, { useState }from 'react';
import { makeStyles } from '@material-ui/core';
import CardListSideBar from '../organisms/CardListSideBar';
import ImageButton from '../atoms/ImageButton';

const useStyles = makeStyles((theme) => ({
    root : {
        display: 'flex',
    },
    image: {
        position: 'relative',
        height: 200,
        marginLeft: '20px',
        width: '20%',
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));


const SelectDecks = (props) => {
    const classes = useStyles();
    const [cards, setCards] = useState([]);

    const onClick = (e) => {
        setCards(e);
    }

    return (
        <>
            <h1>デッキ選択画面です。</h1>
            <div className={classes.root}>
                {props.userDecks.map((userDeck) =>
                    <ImageButton Title={userDeck.deck_name}
                        key={userDeck.deck_id}
                        classes={classes}
                        onClick={() => onClick(userDeck.cards)}
                    />
                )}
            </div>
            <CardListSideBar 
                cards={cards}
                opponentUserName={props.opponentUserName}
            />
        </>
    );
}

export default SelectDecks;