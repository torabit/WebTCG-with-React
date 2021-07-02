-- ハイクラスデッキ「インテレオンVMAX」
INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types,
    first_skill_type, first_skill_type_cost, first_skill_colorless_cost, first_skill_attack_damage,
    isAbilities, weaknesses, convertedRetreatCost, img_url, isDelete
) VALUES (
    'SGI007', 'クロバットV', '1', '{2,21}', '180', '1',
    '1', '1', '1', '70',
    '1', '4', '1', 'https://www.pokemon-card.com/assets/images/card_images/large/SGI/039565_P_KUROBATTOV.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id,pokemon_card_name,supertype,subtypes,
    img_url,isDelete
) VALUES (
    'SGI017', '博士の研究（アララギ博士）', '2', '{18}',
    'https://www.pokemon-card.com/assets/images/card_images/large/SGI/039575_T_HAKASENOKENKYUUARARAGIHAKASE.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id,pokemon_card_name,supertype,subtypes,img_url,isDelete
) VALUES (
    'SGI018', '冒険家の発見', '2', '{18}',
    'https://www.pokemon-card.com/assets/images/card_images/large/SGI/039576_T_BOUKENKANOHAKKEN.jpg','0'
);

INSERT INTO pokemon_card (
    pokemon_card_id,pokemon_card_name,supertype,subtypes,
    img_url,isDelete
) VALUES (
    'SGI019', 'ボスの指令（フラダリ）', '2', '{18}',
    'https://www.pokemon-card.com/assets/images/card_images/large/SGI/039577_T_BOSUNOSHIREIFURADARI.jpg', '0'
);