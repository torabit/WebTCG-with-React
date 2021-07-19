import {atom} from 'recoil';

const benchState = atom ({
    key: 'bench',
    default: [],
});

export default benchState;