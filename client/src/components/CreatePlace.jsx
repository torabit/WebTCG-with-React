import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import AcceptButton from './common/AcceptButton';
import Axios from 'axios';
import UserNameContext from './Context/UserNameContext';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
    marginLeft: '3%',
  },
  allStyles: {
    display: 'flex',

  },
  buttonStyles: {
    height: '35px',
    width: '10%',
    margin: '2%',
  },
  ptagStyles: {
    margin: '3%',
  }
}));

const CreatePlace = (props) => {
  const classes = useStyles();

	const userName = useContext(UserNameContext);

    const isCorrect = () => {
        //length後々変更します
        if (props.count >= 1) {
          Axios.post('http://localhost:3001/createdeck',{  
          userId:userName,
          decks:props.cardDetails,
          deckName:deckName,
          });
          props.setBool(prevState => !prevState);
        } else alert('デッキ枚数が60枚に達していません!');
    }

    const [deckName, setDeckName] = useState('新しいデッキ');

    const onChangeDeckName = (event) => {
      setDeckName(event.target.value);
    }

    return (
    <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
          <TextField color='secondary' textcolor='secondary' label='デッキ名' id='deckname' value={deckName} onChange={(event) => onChangeDeckName(event)}/>
            {props.cardDetails.map((cardDetail) =>
            <div className={classes.allStyles} key={cardDetail.array.pokemon_card_id}>
              {/* 追加ボタン */}
                <button className={classes.buttonStyles}/>
                {/* 削除ボタン */}
                <ListItem button>
                  {/* 属性アイコン予定 */}
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={cardDetail.array.pokemon_card_name}/>
                </ListItem>
              <p className={classes.ptagStyles}>{cardDetail.array.count}</p>
            </div>
            )}
            <p>{props.count}</p>
            <AcceptButton name={'完了'} isCorrect={isCorrect}/>
        </List>
    </div>
  );
}
export default CreatePlace;