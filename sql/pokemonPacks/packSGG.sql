-- ハイクラスデッキ「ゲンガーVMAX」
INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types,  
    first_skill_type, first_skill_type_cost, first_skill_attack_damage,
    second_skill_type, second_skill_type_cost, second_skill_attack_damage,
    isAbilities, weaknesses, convertedRetreatCost, img_url, isDelete
) VALUES (
    'SGG001', 'ゲンガーV', '1', '{2,21,24}', '210', '1', 
    '1', '2', '40', 
    '1', '3', '190', 
    '0', '4', '2', 'https://www.pokemon-card.com/assets/images/card_images/large/SGG/039538_P_GENGAV.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types, evolvesFrom, 
    first_skill_type, first_skill_type_cost, first_skill_attack_damage,
    second_skill_type, second_skill_type_cost, second_skill_attack_damage,
    isAbilities, weaknesses, convertedRetreatCost, img_url, isDelete
) VALUES (
    'SGG002', 'ゲンガーVMAX', '1', '{22, 24}', '320', '1', 'ゲンガーV', 
    '1', '2', '60',
    '1', '3', '250',
    '0', '4', '3', 'https://www.pokemon-card.com/assets/images/card_images/large/SGG/039539_P_GENGAVMAX.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types,
    first_skill_colorless_cost, first_skill_attack_damage,
    isAbilities, weaknesses, convertedRetreatCost, img_url, isDelete
) VALUES (
    'SGG004', 'デルビル', '1', '{2,24}', '60', '1', 
    '1', '20', 
    '0', '6', '1', 'https://www.pokemon-card.com/assets/images/card_images/large/SGG/039541_P_DERUBIRU.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types, evolvesFrom, 
    first_skill_type, first_skill_type_cost, first_skill_colorless_cost, first_skill_attack_damage,
    isAbilities, weaknesses, convertedRetreatCost, img_url, isDelete
) VALUES (
    'SGG005', 'ヘルガー', '1', '{16, 24}', '130', '1', 'デルビル', 
    '1', '1', '1', '50',
    '1', '6', '2', 'https://www.pokemon-card.com/assets/images/card_images/large/SGG/039542_P_HERUGA.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, 
    img_url, isDelete
) VALUES (
    'SGG008', '活力の壺', '2', '{6, 24}', 
    'https://www.pokemon-card.com/assets/images/card_images/large/SGG/039545_T_KATSURYOKUNOTSUBO.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, 
    img_url, isDelete
) VALUES (
    'SGG018', 'あくの塔', '2', '{15,24}', 
    'https://www.pokemon-card.com/assets/images/card_images/large/SGG/039555_T_AKUNOTOU.jpg', '0'
);