-- 拡張パック「漆黒のガイスト」
INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types, 
    first_skill_type, first_skill_type_cost, 
    second_skill_type, second_skill_type_cost, second_skill_attack_damage,
    isAbilities, weaknesses, resistances, convertedRetreatCost, img_url, isDelete
) VALUES (
    'S6K029', 'クレセリア', '1', '{2}', '120', '9', 
    '9', '1', 
    '9', '2', '30', 
    '0', '1', '4', '1', 'https://www.pokemon-card.com/assets/images/card_images/large/S6K/039460_P_KURESERIA.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types, 
    first_skill_type, first_skill_type_cost, first_skill_attack_damage,
    second_skill_colorless_cost,
    isAbilities, weaknesses, resistances, convertedRetreatCost, img_url, isDelete
) VALUES (
    'S6K036', 'こくばバドレックスV', '1', '{2,21}', '210', '9', 
    '9', '1', '10',
    '3', 
    '0', '1', '4', '2', 'https://www.pokemon-card.com/assets/images/card_images/large/S6K/039467_P_KOKUBABADOREKKUSUV.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types, evolvesFrom, 
    first_skill_colorless_cost, first_skill_attack_damage,
    isAbilities, weaknesses, resistances, convertedRetreatCost, img_url, isDelete
) VALUES (
    'S6K037', 'こくばバドレックスVMAX', '1', '{22}', '320', '9', 'こくばバドレックスV',
    '3', '10',
    '1', '1', '4', '2', 'https://www.pokemon-card.com/assets/images/card_images/large/S6K/039468_P_KOKUBABADOREKKUSUVMAX.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, 
    img_url, isDelete
) VALUES (
    'S6K060', '霧の水晶', '2', '{6}', 
    'https://www.pokemon-card.com/assets/images/card_images/large/S6K/039491_T_KIRINOSUISHOU.jpg', '0'
);