import {atom} from 'recoil';

const contentTextState = atom ({
    key: 'contentText',
    default: '',
});

export default contentTextState;