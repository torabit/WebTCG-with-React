function shuffle (deck) {
    for (let j=0; j<7; j++) {
        for (let i=(deck.length - 1); 0 < i; i--) {
            let r = Math.floor(Math.random() * (i + 1));
    
            let tmp = deck[i];
            deck[i] = deck[r];
            deck[r] = tmp;
        }
    }
    return deck;
}


exports.shuffle = shuffle;