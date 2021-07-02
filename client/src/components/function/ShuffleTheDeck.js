export default function ShuffleTheDeck (deck) {
    for (let i=(deck.length - 1); 0 < i; i--) {
        let r = Math.floor(Math.random() * (i + 1));

        let tmp = deck[i];
        deck[i] = deck[r];
        deck[r] = tmp;
    }
    return deck;
}