import {atom} from 'recoil';

const howManyState = atom ({
    key: 'howMany',
    default: 0,
});

export default howManyState;