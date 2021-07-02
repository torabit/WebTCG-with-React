--強化拡張パック「伝説の鼓動」
INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types, 
    first_skill_type, first_skill_type_cost, 
    second_skill_type, second_skill_type_cost, second_skill_colorless_cost, second_skill_attack_damage,
    isAbilities, weaknesses, convertedRetreatCost, img_url, isDelete
) VALUES (
    'S3a031', 'マホイップV', '1', '{2,21}', '170', '9', 
    '9', '1', 
    '9', '1', '2', '100', 
    '0', '8', '2', 'https://www.pokemon-card.com/assets/images/card_images/large/S3a/038437_P_MAHOIPPUV.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types, evolvesFrom, 
    first_skill_colorless_cost, 
    second_skill_type, second_skill_type_cost, second_skill_attack_damage,
    isAbilities, weaknesses, convertedRetreatCost, img_url, isDelete
) VALUES (
    'S3a032', 'マホイップVMAX', '1', '{22}', '310', '9', 'マホイップV', 
    '1',
    '9', '2', '60',
    '0', '8', '3', 'https://www.pokemon-card.com/assets/images/card_images/large/S3a/038438_P_MAHOIPPUVMAX.jpg', '0'
);