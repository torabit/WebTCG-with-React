import {atom} from 'recoil';

const choosenCardsState = atom ({
    key: 'choosenCards',
    default: [],
});

export default choosenCardsState;