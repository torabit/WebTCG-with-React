import {atom} from 'recoil';

const trashState = atom ({
    key: 'trash',
    default: [],
});

export default trashState;