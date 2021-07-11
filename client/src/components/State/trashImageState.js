import {atom} from 'recoil';

const trashImageState = atom ({
    key: 'trashImage',
    default: [],
});

export default trashImageState;