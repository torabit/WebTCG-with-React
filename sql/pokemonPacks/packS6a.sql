-- �����g���p�b�N�u�C�[�u�C�q�[���[�Y�v
INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types,
    first_skill_type, first_skill_type_cost, first_skill_attack_damage,
    second_skill_type, second_skill_type_cost, second_skill_colorless_cost, second_skill_attack_damage,
    isAbilities, weaknesses, convertedRetreatCost, img_url, isDelete
) VALUES (
    'S6a047', '�u���b�L�[V', '1', '{2,21,24}', '200','1', 
    '1', '1', '30',
    '1', '1', '2', '80',
    '0', '6', '2', 'https://www.pokemon-card.com/assets/images/card_images/large/S6a/039631_P_BURAKKIV.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types, evolvesFrom,
    first_skill_type, first_skill_type_cost, first_skill_colorless_cost, first_skill_attack_damage,
    isAbilities, weaknesses, convertedRetreatCost, img_url, isDelete
) VALUES (
    'S6a048', '�u���b�L�[VMAX', '1', '{22,24}', '310', '1', '�u���b�L�[V', 
    '1', '1', '2', '160', 
    '1', '6', '2', 'https://www.pokemon-card.com/assets/images/card_images/large/S6a/039632_P_BURAKKIVMAX.jpg', '0'
);