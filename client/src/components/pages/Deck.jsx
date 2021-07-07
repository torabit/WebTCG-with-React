import React, { useState } from 'react';
import CreateDecks from '../pages/CreateDecks';
import DeckList from '../molecules/DeckList';

const Deck = () => {  

    const [bool, setBool] = useState(false);
    
    const onClick = () => {
        setBool(prevState => !prevState);
    }
        return (
        <div>
            {bool && (<CreateDecks setBool={setBool}/>)}
            {!bool && (<DeckList onClick={onClick}/>)}
        </div>
    );
}

export default Deck;