import {atom} from 'recoil';

const yourTurnState = atom ({
    key: 'yourTurn',
    default: false,
});

export default yourTurnState;