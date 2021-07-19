import {atom} from 'recoil';

const cardNameState = atom ({
    key: 'cardName',
    default: '',
});

export default cardNameState;