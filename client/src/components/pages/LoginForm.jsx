import React, { useState } from 'react';
import Axios from 'axios';
import '../../css/style.css';
import {TextField, Box, createMuiTheme, ThemeProvider} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import AcceptButton from '../atoms/AcceptButton';

const DB_URL = process.env.REACT_APP_API_DB_URL; // db api url

const theme = createMuiTheme({
    overrides: {
        MuiInputLabel: { // Name of the component ⚛️ / style sheet
            root: { // Name of the rule
                color: 'white',
                '&$focused': { // increase the specificity for the pseudo class
                color: 'white'
                },
            }
        },

        MuiOutlinedInput: {
            input: {
                '&:-webkit-autofill': {
                '-webkit-box-shadow': '0 0 0 100px #282c34 inset',
                '-webkit-text-fill-color': 'white'
                }
            }
        }
    }
});

const Login = () => {
    const [userId,setUserId] = useState('');
    const history = useHistory();

    const onChangeUserId = (event) => {
        setUserId(event.target.value);
    }
    
    const isCorrect = () => {
        Axios.get(`${DB_URL}/login`,{ params: {user:userId}})
        .then((results) => {
            history.push({
                pathname: '/main',
                state: { userId: userId }
            })
        });
    }
    
    return (
        <>
            <header className='login-header'>
                <img src='pokemonTitle.png' className='App-logo' alt='logo' />
            </header>
            <div className='login-form'>
                <ThemeProvider theme={theme}>
                    <TextField label='ユーザー' variant='outlined' value={userId} id='user' onChange={onChangeUserId} />
                </ThemeProvider>
                <Box>
                    <AcceptButton isCorrect={isCorrect} name={'ログイン'}/>
                </Box>
            </div>
        </>
    );
}

export default Login;