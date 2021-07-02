-- ハイクラスパック「TAG TEAM GX タッグオールスターズ」
INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types, 
    first_skill_type, first_skill_type_cost, first_skill_colorless_cost, first_skill_attack_damage,
    second_skill_type, second_skill_type_cost, second_skill_colorless_cost, second_skill_attack_damage,
    isAbilities, weaknesses, resistances, convertedRetreatCost, img_url, isDelete
) VALUES (
    'SM12a048', 'デデンネGX', '1', '{2,4}', '160', '7', 
    '7', '1', '1', '50', 
    '7', '1', '1', '50',
    '1', '4', '8', '1', 'https://www.pokemon-card.com/assets/images/card_images/large/SM12a/037252_P_DEDENNEGX.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types, 
    first_skill_colorless_cost, 
    isAbilities, weaknesses, convertedRetreatCost, img_url, isDelete
) VALUES (
    'SM12a055', 'ミュウ', '1', '{2}', '60', '9',
    '1',
    '1', '9', '1', 'https://www.pokemon-card.com/assets/images/card_images/large/SM12a/037259_P_MYUU.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types, 
    first_skill_colorless_cost, first_skill_attack_damage, 
    isAbilities, weaknesses, resistances, convertedRetreatCost, img_url, isDelete
) VALUES (
    'SM12a064', 'マーシャドー', '1', '{2}', '80', '9', 
    '1', '10', 
    '1', '1', '4', '1', 'https://www.pokemon-card.com/assets/images/card_images/large/SM12a/037268_P_MASHADO.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, 
    img_url, isDelete
) VALUES (
    'SM12a143', 'Uターンボード', '2', '{6,10}', 'https://www.pokemon-card.com/assets/images/card_images/large/SM12a/037347_T_UTANBODO.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id,pokemon_card_name,supertype,subtypes,
    img_url, isDelete
) VALUES (
    'SM12a165', 'トキワの森', '2', '{15}', 
    'https://www.pokemon-card.com/assets/images/card_images/large/SM12a/037369_T_TOKIWANOMORI.jpg', '0'
);