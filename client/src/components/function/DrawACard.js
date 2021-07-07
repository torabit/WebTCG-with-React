import Io from 'socket.io-client';

const BATTLE_URL = process.env.REACT_APP_API_BATTLE_URL; // 対戦用api url
export default function DrawACard (userName) {
    let socketIo = Io(BATTLE_URL);
    let deck = [];
    let draw = [];

    if (socketIo !== undefined) {
        socketIo.emit('deck', { yourId: userName });
        socketIo.on('getDeck', (original) => {
            draw = original.deck[original.deck.length - 1];
            deck = [...original.deck];
            deck.pop();
        });
    }

    if (socketIo !== undefined) {
        socketIo.emit('setHand', {
            yourId: userName,
            hand : draw,
        });
    }

    if (socketIo !== undefined) {
        socketIo.emit('setDeck', { 
            yourId: userName,
            deck : deck,
        });

    }
    console.log(deck);
    console.log(draw);
    return deck;
}