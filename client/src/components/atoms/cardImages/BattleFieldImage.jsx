import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { useRecoilValue } from 'recoil';
import battleFieldState from '../../State/battleFieldState';
import EnergyBadge from '../../molecules/EnergyBadge';
import energyAndToolState from '../../State/energyAndToolState';
import Tooltip from '@material-ui/core/Tooltip';

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
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
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
    iconEnergy: {
        position: 'absolute',
        left: '90%',
    }
}));

const BattleFieldImage = () => {
    const classes = useStyles();
    const battlePokemon = useRecoilValue(battleFieldState);
    const energyAndTool = useRecoilValue(energyAndToolState);
    const cardDetail = energyAndTool[`${battlePokemon.ingame_id}`];

    return (
        <Tooltip title={
            <span style={{whiteSpace: 'pre-line'}}>
                {cardDetail !== undefined && (cardDetail.energyDetail.map(energy => `エナジーカード: ${energy.card_name} \n`))}
            </span>}
        >
            <ButtonBase
                focusRipple
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                    width: 130,
                    height: 180,
                }}
            >
                <span
                    className={classes.imageSrc}
                    style={{
                        backgroundImage: `url(${battlePokemon.img_url})`,
                    }}
                />
                {battlePokemon.length === 0 && (
                    <span className={classes.imageBackdrop}/>
                )}
                <span className={classes.imageButton}>
                    <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        className={classes.imageTitle}
                    >
                        {'BattleField'}
                        <span className={classes.imageMarked} />
                    </Typography>
                </span>
                <span className={classes.iconEnergy}>
                    <EnergyBadge ingameId={battlePokemon.ingame_id}/>
                </span>
            </ButtonBase>
        </Tooltip>
    );
}
export default BattleFieldImage;