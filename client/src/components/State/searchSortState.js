import {atom} from 'recoil';

const searchSortState = atom ({
    key: 'searchSort',
    default: 0,
});

export default searchSortState;