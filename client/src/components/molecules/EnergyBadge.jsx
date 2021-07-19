import React from 'react';
import Badge from '@material-ui/core/Badge';
import EnergyIcon from '../atoms/EnergyIcon';
import colorlessIcon from '../../image/typeIcons/colorlessIcon.png';
import darknessIcon from '../../image/typeIcons/darknessIcon.png';
import dragonIcon from '../../image/typeIcons/dragonIcon.png';
import fairyIcon from '../../image/typeIcons/fairyIcon.png';
import fightingIcon from '../../image/typeIcons/fightingIcon.png';
import grassIcon from '../../image/typeIcons/grassIcon.png';
import lightningIcon from '../../image/typeIcons/lightningIcon.png';
import metalIcon from '../../image/typeIcons/metalIcon.png';
import psychicIcon from '../../image/typeIcons/psychicIcon.png';
import waterIcon from '../../image/typeIcons/waterIcon.png';
import rapidStrikeIcon from '../../image/typeIcons/rapidStrikeIcon.png';
import singleStrikeIcon from '../../image/typeIcons/singleStrikeIcon.png';
import energyAndToolState from '../State/energyAndToolState';
import { useRecoilValue } from 'recoil';

const typeIcons = {
    colorless: {
        color: 'primary',
        children: <EnergyIcon icon={colorlessIcon}/>,
    },
    darkness: {
        color: 'primary',
        children: <EnergyIcon icon={darknessIcon}/>,
    },
    dragon: {
        color: 'primary',
        children: <EnergyIcon icon={dragonIcon}/>,
    },
    fairy: {
        color: 'primary',
        children: <EnergyIcon icon={fairyIcon}/>,
    },
    fighting: {
        color: 'primary',
        children: <EnergyIcon icon={fightingIcon}/>,
    },
    grass: {
        color: 'primary',
        children: <EnergyIcon icon={grassIcon}/>,
    },
    lightning: {
        color: 'primary',
        children: <EnergyIcon icon={lightningIcon}/>,
    },
    metal: {
        color: 'primary',
        children: <EnergyIcon icon={metalIcon}/>,
    },
    psychic: {
        color: 'primary',
        children: <EnergyIcon icon={psychicIcon}/>,
    },
    water: {
        color: 'primary',
        children: <EnergyIcon icon={waterIcon}/>,
    },
    rapidStrike: {
        color: 'primary',
        children: <EnergyIcon icon={rapidStrikeIcon}/>,
    },
    singleStrike: {
        color: 'primary',
        children: <EnergyIcon icon={singleStrikeIcon}/>,
    }
};

const EnergyBadge = (props) => {
    const energyAndTool = useRecoilValue(energyAndToolState);
    const cardDetail = energyAndTool[`${props.ingameId}`];
    return (
        <div>
            {(cardDetail !== undefined && cardDetail.energyCnt.colorless > 0) && (
                <Badge
                    badgeContent={cardDetail.energyCnt.colorless} max={99} {...typeIcons.colorless} display='block'
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                />
            )}
            {(cardDetail !== undefined && cardDetail.energyCnt.darkness > 0) && (
                <Badge
                    badgeContent={cardDetail.energyCnt.darkness} max={99} {...typeIcons.darkness} display='block'
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                />
            )}
            {(cardDetail !== undefined && cardDetail.energyCnt.dragon > 0) && (
                <Badge
                    badgeContent={cardDetail.energyCnt.dragon} max={99} {...typeIcons.dragon} display='block'
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }} 
                />
            )}
            {(cardDetail !== undefined && cardDetail.energyCnt.fairy > 0) && (
                <Badge
                    badgeContent={cardDetail.energyCnt.fairy} max={99} {...typeIcons.fairy} display='block'
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                />
            )}
            {(cardDetail !== undefined && cardDetail.energyCnt.fighting > 0) && (
                <Badge
                    badgeContent={cardDetail.energyCnt.fighting} max={99} {...typeIcons.fighting} display='block'
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                />
            )}
            {(cardDetail !== undefined && cardDetail.energyCnt.grass > 0) && (
                <Badge
                    badgeContent={cardDetail.energyCnt.grass} max={99} {...typeIcons.grass} display='block'
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                />
            )}
            {(cardDetail !== undefined && cardDetail.energyCnt.lightning > 0) && (
            <Badge
                badgeContent={cardDetail.energyCnt.lightning} max={99} {...typeIcons.lightning} display='block'
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            />
            )}
            {(cardDetail !== undefined && cardDetail.energyCnt.metal > 0) && (
                <Badge
                    badgeContent={cardDetail.energyCnt.metal} max={99} {...typeIcons.metal} display='block'
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                />
            )}
            {(cardDetail !== undefined && cardDetail.energyCnt.psychic > 0) && (
                <Badge
                    badgeContent={cardDetail.energyCnt.psychic} max={99} {...typeIcons.psychic} display='block'
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                />
            )}
            {(cardDetail !== undefined && cardDetail.energyCnt.water > 0) && (
                <Badge
                    badgeContent={cardDetail.energyCnt.water} max={99} {...typeIcons.water} display='block'
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                />
            )}
            {(cardDetail !== undefined && cardDetail.energyCnt.rapidStrikeEnergy > 0) && (
                <Badge
                    badgeContent={cardDetail.energyCnt.rapidStrikeEnergy} max={99} {...typeIcons.rapidStrike} display='block'
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                />
            )}
            {(cardDetail !== undefined && cardDetail.energyCnt.singleStrikeEnergy > 0) && (
                <Badge
                badgeContent={cardDetail.energyCnt.singleStrikeEnergy} max={99} {...typeIcons.singleStrike} display='block'
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            />
            )}
        </div>
    );
}

export default EnergyBadge;