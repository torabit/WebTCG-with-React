import {atom} from 'recoil';

const handState = atom ({
    key: 'hand',
    default: [],
});

export default handState;