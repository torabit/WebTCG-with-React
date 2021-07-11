import {atom} from 'recoil';

const offTurnDisplayState = atom ({
    key: 'offTurnDisplay',
    default: false,
});

export default offTurnDisplayState;