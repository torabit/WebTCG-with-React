import React from 'react';
import SectionTab from '../molecules/SectionTab';
import Home from './Home';
import Deck from './/Deck';
import Battle from './Battle';
import '../../css/style.css';
import UserNameContext from '../Context/UserNameContext';

const sectionTab = {home: 'ホーム', deck: 'デッキ', battle: '対戦'}

const Main = (props) => {
    const userName = { yourId: props.location.state.userId }
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div className='main-page'>
            <SectionTab name={sectionTab} handleChange={handleChange} value={value}/>
            {value === 0 && (
                <Home/>
            )} 
            {value === 1 && (
                <UserNameContext.Provider value={userName}>
                    <Deck/>
                </UserNameContext.Provider>
            )}
            {value === 2 && (
                <UserNameContext.Provider value={userName}>
                    <Battle />
                </UserNameContext.Provider>
            )}
        </div>
    );
}

export default Main;