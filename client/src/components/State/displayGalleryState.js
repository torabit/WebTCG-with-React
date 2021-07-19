import {atom} from 'recoil';

const displayGalleryState = atom ({
    key: 'displayGallery',
    default: false,
});

export default displayGalleryState;