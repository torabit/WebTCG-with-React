-- 強化拡張パック「双璧のファイター」
INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types, 
    first_skill_colorless_cost, 
    second_skill_colorless_cost, second_skill_attack_damage,
    isAbilities, weaknesses, convertedRetreatCost, img_url,isDelete
) VALUES (
    'S5a016', 'メッソン', '1', '{2,23}', '60', '10', 
    '1', 
    '2', '20',
    '0', '7', '1', 'https://www.pokemon-card.com/assets/images/card_images/large/S5a/039283_P_MESSON.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types, evolvesFrom, 
    first_skill_colorless_cost, first_skill_attack_damage,
    isAbilities, weaknesses, convertedRetreatCost, img_url, isDelete
) VALUES (
    'S5a018', 'インテレオン', '1', '{17,23}', '150', '10', 'ジメレオン', 
    '2', '70', 
    '1', '7', '1', 'https://www.pokemon-card.com/assets/images/card_images/large/S5a/039285_P_INTEREON.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types, 
    first_skill_type, first_skill_type_cost, 
    isAbilities, weaknesses, convertedRetreatCost, img_url, isDelete
) VALUES (
    'S5a043', 'ナゲツケサル', '1', '{2,23}', '110', '4', 
    '4', '1',
    '1', '9', '1', 'https://www.pokemon-card.com/assets/images/card_images/large/S5a/039310_P_NAGETSUKESARU.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types,
    first_skill_type, first_skill_type_cost, first_skill_colorless_cost, first_skill_attack_damage,
    isAbilities, weaknesses, convertedRetreatCost, img_url, isDelete
) VALUES (
    'S5a045', 'ガラル ファイヤーV', '1', '{2}', '220', '1',
    '1', '2', '1', '190',
    '1', '6', '2', 'https://www.pokemon-card.com/assets/images/card_images/large/S5a/039312_P_GARARUFAIYAV.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, 
    img_url, isDelete
) VALUES (
    'S5a064', 'やまびこホーン', '2', '{6,23}', 
    'https://www.pokemon-card.com/assets/images/card_images/large/S5a/039331_T_YAMABIKOHON.jpg', '0'
);