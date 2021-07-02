const express = require('express');
const router = express();

exports.getCards = function(req, res, pool) {
  pool.connect( (err, client) => {
    if (err) {
      console.log(err);
    } else {
        client.query(`SELECT pokemon_card_id, pokemon_card_name, img_url FROM pokemon_card WHERE ISDELETE='0'`, (err, result) => {
            if (true) {
              res.header('Access-Control-Allow-Origin', '*');
              res.json([{
                  url: '/decklist', // デッキリスト返還
                  cardlist: result.rows,
              }]);
            }
      });
    }
  });
};