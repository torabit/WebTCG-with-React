import {atom} from 'recoil';

const countState = atom ({
    key: 'count',
    default: 0,
});

export default countState;