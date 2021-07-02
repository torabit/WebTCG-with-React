import {atom} from 'recoil';

const yourHandState = atom ({
    key: 'yourHand',
    default: [],
});

export default yourHandState;