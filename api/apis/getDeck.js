const express = require('express');
const router = express();

exports.getDeck = function(req, res, pool) {
	pool.connect( (err, client) => {
		if (err) {
			console.log(err);
		} else {
			const userId = req.body.userId;
			client.query(`
				SELECT deck.user_id, deck.deck_id, deck.deck_name, 
				deck_cards.number_of_cards, deck_cards.card_id, 
				pokemon_card_name, supertype, subtypes, hp, types, evolvesFrom, 
				first_skill_type, first_skill_type_cost, first_skill_colorless_cost, 
				first_skill_attack_damage, second_skill_type, second_skill_type_cost, 
				second_skill_colorless_cost, second_skill_attack_damage, isAbilities,
				weaknesses, resistances, convertedRetreatCost, img_url 
				FROM deck_cards 
				LEFT JOIN pokemon_card ON pokemon_card.pokemon_card_id = deck_cards.card_id 
				LEFT JOIN deck ON deck.deck_id = deck_cards.deck_id 
				WHERE deck.user_id = '${userId}'`, 
				(err, result) => {
					let deck = [];
					result.rows.map((row) => {
						if (deck.length === 0 || row.deck_id != deck[deck.length - 1].deck_id) {
							deck.push({
								deck_id: row.deck_id,
								deck_name: row.deck_name,
								cards: [{
									ingame_id:'',
									number_of_cards: row.number_of_cards, card_id: row.card_id, card_name: row.pokemon_card_name,
									supertype: row.supertype, subtypes: row.subtypes, hp: row.hp, types: row.types, evolvesFrom: row.evolvesfrom,
									first_skill_type: row.first_skill_type, first_skill_type_cost: row.first_skill_type_cost, first_skill_colorless_cost: row.first_skill_colorless_cost,
									first_skill_attack_damage: row.first_skill_attack_damage, second_skill_type: row.second_skill_type, second_skill_type_cost: row.second_skill_type_cost,
									second_skill_colorless_cost: row.second_skill_colorless_cost, second_skill_attack_damage: row.second_skill_attack_damage, isAbilities: row.isabilities,
									weaknesses: row.weaknesses, resistances: row.resistances, convertedRetreatCost: row.convertedretreatcost, img_url: row.img_url
								}]
							});
						} else {
							deck[deck.length - 1]['cards'].push({
									ingame_id:'',
									number_of_cards: row.number_of_cards, card_id: row.card_id, card_name: row.pokemon_card_name,
									supertype: row.supertype, subtypes: row.subtypes, hp: row.hp, types: row.types, evolvesFrom: row.evolvesfrom,
									first_skill_type: row.first_skill_type, first_skill_type_cost: row.first_skill_type_cost, first_skill_colorless_cost: row.first_skill_colorless_cost,
									first_skill_attack_damage: row.first_skill_attack_damage, second_skill_type: row.second_skill_type, second_skill_type_cost: row.second_skill_type_cost,
									second_skill_colorless_cost: row.second_skill_colorless_cost, second_skill_attack_damage: row.second_skill_attack_damage, isAbilities: row.isabilities,
									weaknesses: row.weaknesses, resistances: row.resistances, convertedRetreatCost: row.convertedretreatcost, img_url: row.img_url
								}
							);
						}
					});

					if (true) {
						res.header('Access-Control-Allow-Origin', '*');
						res.json([{
							userDeck: deck
						}]);
					}
				}
			);
		}
	});
};