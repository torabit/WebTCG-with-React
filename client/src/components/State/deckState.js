import {atom} from 'recoil';

const deckState = atom ({
    key: 'deck',
    default: [],
});

export default deckState;