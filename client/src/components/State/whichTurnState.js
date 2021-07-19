import {atom} from 'recoil';

const whichTurnState = atom ({
    key: 'whichTurn',
    default: '',
});

export default whichTurnState;