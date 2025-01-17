import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import searchSortState from '../../State/searchSortState';
import choosenCardsState from '../../State/choosenCardsState';
import howManyState from '../../State/howManyState';
import whichSortState from '../../State/whichSortState';
import countState from '../../State/countState';
import { useRecoilState, useRecoilValue } from 'recoil';

const useStyles = makeStyles((theme) => ({
    image: {
        position: 'relative',
        margin: '10px',
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 400,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageMarked': {
                opacity: 0,
            },
        },
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
        borderRadius: '5%',
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        borderRadius: '5%',
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

const CardGalleryImage = (props) => {
    const classes = useStyles();
    const card = props.card;
    const searchSort = useRecoilValue(searchSortState);
    const howMany = useRecoilValue(howManyState);
    const whichSort = useRecoilValue(whichSortState);
    const [choosenCards, setChoosenCards] = useRecoilState(choosenCardsState);
    const [isSelected, setIsSelected] = useState(false);
    const [count, setCount] = useRecoilState(countState);
    const image = {
        url: card.img_url,
        width: 130,
        height: 180,
    };
    let onDisplay = false;
    let compareBool = false;
    let compareTypes = [];
    switch(whichSort) {
        case 'supertype':
            if (card.supertype === searchSort) onDisplay = true;
            break;
        case 'pokemonSubtypes':
            if (card.supertype === 1) compareBool = true;
            compareTypes = card.subtypes.filter(subtype => searchSort.includes(subtype));
            if (compareBool) onDisplay = searchSort.includes(compareTypes[0]);
            break;
        case 'hp':
            if (card.hp !== null) if(card.hp <= searchSort) onDisplay = true;
            break;
        case '霧の水晶':
            if (card.types === 9) compareBool = true;
            compareTypes = card.subtypes.filter(subtype => searchSort.includes(subtype));
            if (compareBool) onDisplay = searchSort.includes(compareTypes[0]);
        default:
            console.log('このカードの関数はまだありません');
    }

    const selected = () => {
        let newChoosenCards = [];
        if (onDisplay) {
            if (!isSelected && count < howMany) {
                setIsSelected(prev => !prev);
                setChoosenCards([...choosenCards, props.ingameId]);
                setCount(prev => prev + 1);
            } else if (isSelected){
                setIsSelected(prev => !prev);
                newChoosenCards = [...choosenCards];
                newChoosenCards.forEach((newChoosenCard, index) => {
                    if(newChoosenCard === props.ingameId) {
                        newChoosenCards.splice(index, 1);
                    }
                });
                setChoosenCards(newChoosenCards);
                setCount(prev => prev - 1);
            }
        }
    } 

    return (
        <ButtonBase
            focusRipple
            className={classes.image}
            style={{
                width: image.width,
                height: image.height,
            }}
            onClick={selected}         
        >
            <span
                className={classes.imageSrc}
                style={{
                    backgroundImage: `url(${image.url})`,
                }}
            />
            {(!onDisplay || count >= howMany || isSelected)&&(
                <span className={classes.imageBackdrop} />
            )}
            {isSelected &&(
                <span className={classes.imageButton}>
                    <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={classes.imageTitle}
                    >
                        {'Selected'}
                        <span className={classes.imageMarked} />
                    </Typography>
                </span>
            )}
        </ButtonBase>
    );
}
export default CardGalleryImage;