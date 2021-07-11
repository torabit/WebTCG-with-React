export default function DrawACard (userName) {
    let deck = [];
    let draw = [];

    if (window.socket !== undefined) {
        window.socket.emit('deck', { yourId: userName });
        window.socket.on('getDeck', (original) => {
            draw = original.deck[original.deck.length - 1];
            deck = [...original.deck];
            deck.pop();
        });
    }

    if (window.socket !== undefined) {
        window.socket.emit('setHand', {
            yourId: userName,
            hand : draw,
        });
    }

    if (window.socket !== undefined) {
        window.socket.emit('setDeck', { 
            yourId: userName,
            deck : deck,
        });
    }
    
    console.log(deck);
    console.log(draw);
    return deck;
}