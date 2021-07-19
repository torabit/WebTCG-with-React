import {atom} from 'recoil';

const galleryState = atom ({
    key: 'gallery',
    default: [],
});

export default galleryState;