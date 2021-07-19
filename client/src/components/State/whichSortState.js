import {atom} from 'recoil';

const whichSortState = atom ({
    key: 'whichSort',
    default: '',
});

export default whichSortState;