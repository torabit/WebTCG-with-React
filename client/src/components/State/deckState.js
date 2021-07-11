import {atom} from 'recoil';

const deckState = atom ({
    key: 'deck',
    default: 0,
});

export default deckState;