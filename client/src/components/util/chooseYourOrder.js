import { draw, oppDraw } from './clientDeckUtil';

export default async function chooseYourOrder (whichOrder, yourId, oppId) {
    window.socket.emit('shuffleTheDeck', { yourId: yourId });
    window.socket.emit('shuffleTheDeck', { yourId: oppId });
    if (whichOrder) {
        for (let i=0; i<7; i++) {
            await draw(yourId);
        }
        for (let i=0; i<7; i++) {
            await oppDraw(oppId);
        }
    } else {
        for (let i=0; i<7; i++) {
            await oppDraw(oppId);
        }
        for (let i=0; i<7; i++) {
            await draw(yourId);
        }
    }
    // window.socket.emit('noBasic', { yourId: userName.yourId });
    // window.socket.on('getNoBasic', bool => {
    //     setNoBasic(bool.basic);
    // });
    return false;
}