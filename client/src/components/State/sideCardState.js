import {atom} from 'recoil';

const sideCardState = atom ({
    key: 'sideCards',
    default: [],
});

export default sideCardState;