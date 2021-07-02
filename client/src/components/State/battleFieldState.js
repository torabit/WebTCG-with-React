import {atom} from 'recoil';

const battleFieldState = atom ({
    key: 'battleField',
    default: [],
});

export default battleFieldState;