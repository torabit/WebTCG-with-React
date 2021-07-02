-- 拡張パック「連撃マスター」
INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types, 
    first_skill_type, first_skill_type_cost, first_skill_attack_damage,
    second_skill_type, second_skill_type_cost, second_skill_colorless_cost, second_skill_attack_damage,
    isAbilities, weaknesses, convertedRetreatCost, img_url, isDelete
) VALUES (
    'S5R050', 'れんげきウーラオスV', '1', '{2,21,23}', '220', '4', 
    '4', '1', '30', 
    '4', '2', '1', '150', 
    '0', '9', '2', 'https://www.pokemon-card.com/assets/images/card_images/large/S5R/039180_P_RENGEKIURAOSUV.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types, evolvesFrom, 
    first_skill_type, first_skill_type_cost, first_skill_attack_damage,
    second_skill_type, second_skill_type_cost, second_skill_colorless_cost, 
    isAbilities, weaknesses, convertedRetreatCost, img_url,isDelete
) VALUES (
    'S5R051', 'れんげきウーラオスVMAX', '1', '{22,23}', '330', '4', 'れんげきウーラオスV',
    '4', '1', '30',
    '4', '2', '1', 
    '0', '9', '2', 'https://www.pokemon-card.com/assets/images/card_images/large/S5R/039181_P_RENGEKIURAOSUVMAX.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, 
    img_url, isDelete
) VALUES (
    'S5R069', 'みずの塔', '2', '{15,23}', 
    'https://www.pokemon-card.com/assets/images/card_images/large/S5R/039199_T_MIZUNOTOU.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, 
    img_url, isDelete
) VALUES (
    'S5R063', 'レベルボール', '2', '{6}', 
    'https://www.pokemon-card.com/assets/images/card_images/large/S5R/039193_T_REBERUBORU.jpg', '0'
);
