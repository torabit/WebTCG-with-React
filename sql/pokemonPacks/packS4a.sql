--　ハイクラスパック「シャイニースターV」
INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types, evolvesFrom, 
    first_skill_type, first_skill_type_cost, first_skill_colorless_cost, first_skill_attack_damage,
    isAbilities, weaknesses, convertedRetreatCost, img_url, isDelete
) VALUES (
    'S4a040', 'ジメレオン', '1', '{16}', '90', '10', 'メッソン',
    '10', '1', '1', '30', 
    '1', '7', '1', 'https://www.pokemon-card.com/assets/images/card_images/large/S4a/038685_P_JIMEREON.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types, evolvesFrom, 
    first_skill_type, first_skill_type_cost, first_skill_colorless_cost, first_skill_attack_damage,
    isAbilities, weaknesses, convertedRetreatCost, img_url, isDelete
) VALUES (
    'S4a041', 'インテレオン', '1', '{17}', '160', '10', 'ジメレオン',
    '10', '1', '1', '120',
    '1', '7', '1', 'https://www.pokemon-card.com/assets/images/card_images/large/S4a/038686_P_INTEREON.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types,
    first_skill_type, first_skill_type_cost, first_skill_colorless_cost, first_skill_attack_damage,
    isAbilities, weaknesses, convertedRetreatCost, img_url, isDelete
) VALUES (
    'S4a110', 'ガラル ジグザグマ', '1', '{2}', '70',
    '1', '1', '1', '1', '30', 
    '1', '6', '1', 'https://www.pokemon-card.com/assets/images/card_images/large/S4a/038755_P_GARARUJIGUZAGUMA.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types,
    first_skill_colorless_cost, first_skill_attack_damage,
    second_skill_type, second_skill_type_cost, second_skill_colorless_cost, second_skill_attack_damage,
    isAbilities, weaknesses, convertedRetreatCost, img_url, isDelete
) VALUES (
    'S4a124', 'ムゲンダイナV', '1', '{2,21}', '220', '1',
    '1', '30',
    '1', '1', '3', '120', 
    '0', '4', '2', 'https://www.pokemon-card.com/assets/images/card_images/large/S4a/038769_P_MUGENDAINAV.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype,subtypes, hp, types, evolvesFrom,
    first_skill_type, first_skill_type_cost, first_skill_colorless_cost, first_skill_attack_damage, 
    isAbilities, weaknesses, convertedRetreatCost, img_url, isDelete
) VALUES (
    'S4a125', 'ムゲンダイナVMAX', '1', '{22}', '340', '1', 'ムゲンダイナV',
    '1', '1', '1', '30',
    '1', '4', '3', 'https://www.pokemon-card.com/assets/images/card_images/large/S4a/038770_P_MUGENDAINAVMAX.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, 
    img_url, isDelete
) VALUES (
    'S4a186', 'ハイド悪エネルギー', '0', '{14}', 
    'https://www.pokemon-card.com/assets/images/card_images/large/S4a/038831_E_HAIDOAKUENERUGI.jpg', '0'
);