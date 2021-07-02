import {atom} from 'recoil';

const offTurnDisplayState = atom ({
    key: 'offTurnDisplay',
    default: true,
});

export default offTurnDisplayState;