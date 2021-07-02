import {atom} from 'recoil';

const phaseState = atom ({
    key: 'phase',
    default: 0,
});

export default phaseState;