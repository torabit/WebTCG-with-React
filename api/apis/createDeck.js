const express = require('express');
const router = express();

exports.createDeck = function(req, res, pool) {
    pool.connect( (err, client) => {
		if (err) {
		console.log(err);
		} else {
			const cardDetails = req.body.decks;

			let query = `
				INSERT INTO deck (
					user_id, deck_id, deck_name
				) VALUES (
					'${req.body.userId}',nextval('DECK_ID_SEQ'),'${req.body.deckName}'
				)
			`;

			let selectQ = `SELECT deck_id FROM deck ORDER BY update DESC LIMIT 1`;
			
			client.query(query, (err, result) => {
				if (err) console.log(err);
				else {	
					client.query(selectQ, (err, result) => {
						if (err) console.log (err);
						else {
							let size = cardDetails.length;
							for (let i=0; i<size; i++) {
								let deckCards = `
									INSERT INTO deck_cards VALUES (
										'${result.rows[0].deck_id}',
										'${cardDetails[i].array.pokemon_card_id}',
										'${cardDetails[i].array.count}'
									)
								`
								client.query(deckCards, (err, result) => {
									if (err) console.log(err);
								});
							}
						}
					});
				}
      		});
		}
  	});
};