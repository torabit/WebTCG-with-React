\c postgres
DROP DATABASE pokemon;
CREATE DATABASE pokemon;
\c pokemon
CREATE TABLE users (
    user_id varchar(16) NOT NULL,
    password varchar(16),
    isDelete varchar(1) default '0',
    PRIMARY KEY (user_id)
);

CREATE TABLE deck (
    user_id varchar(16) NOT NULL,
    deck_id integer NOT NULL,
    deck_name text,
    update timestamp default CURRENT_TIMESTAMP NOT NULL,
    isDelete varchar(1) default '0' NOT NULL,
    PRIMARY KEY (deck_id)
);

CREATE TABLE deck_cards (
    deck_id integer NOT NULL,
    card_id varchar (8) NOT NULL,
    number_of_cards integer NOT NULL
);

CREATE TABLE pokemon_card (
    pokemon_card_id varchar (8) NOT NULL,
    pokemon_card_name text NOT NULL,
    supertype integer NOT NULL,
    subtypes integer[] NOT NULL,
    hp integer,
    types integer,
    evolvesFrom text,
    first_skill_type integer,
    first_skill_type_cost integer,
    first_skill_colorless_cost integer,
    first_skill_attack_damage integer,
    second_skill_type integer,
    second_skill_type_cost integer,
    second_skill_colorless_cost integer,
    second_skill_attack_damage integer,
    isAbilities integer,
    weaknesses integer,
    resistances integer,
    convertedRetreatCost integer,
    img_url text NOT NULL,
    isDelete varchar(1) default '0' NOT NULL,
    PRIMARY KEY (pokemon_card_id)
);

CREATE TABLE pokemon_supertype (
    supertype_id integer NOT NULL,
    supertype_name text,
    PRIMARY KEY (supertype_id)
);

CREATE TABLE pokemon_subtypes (
    subtypes_id integer NOT NULL,
    subtypes_name text,
    PRIMARY KEY (subtypes_id)
);

CREATE TABLE pokemon_types (
    types_id integer NOT NULL,
    types_name text,
    PRIMARY KEY (types_id)
);

CREATE SEQUENCE DECK_ID_SEQ
    increment BY 1
    maxvalue 99999999
    START WITH 1
    NO CYCLE
;

INSERT INTO users VALUES ('master', '114514', '0');
INSERT INTO users VALUES ('guest', '114514', '0');

-- pokemon_supertype 
INSERT INTO pokemon_supertype VALUES ('0', 'Energy');
INSERT INTO pokemon_supertype VALUES ('1', 'Pokemon');
INSERT INTO pokemon_supertype VALUES ('2', 'Trainer');

-- pokemon_subtypes
INSERT INTO pokemon_subtypes VALUES ('0', 'BREAK');
INSERT INTO pokemon_subtypes VALUES ('1', 'Baby');
INSERT INTO pokemon_subtypes VALUES ('2', 'Basic');
INSERT INTO pokemon_subtypes VALUES ('3', 'EX');
INSERT INTO pokemon_subtypes VALUES ('4', 'GX');
INSERT INTO pokemon_subtypes VALUES ('5', 'Goldenrod Game Corner');
INSERT INTO pokemon_subtypes VALUES ('6', 'Item');
INSERT INTO pokemon_subtypes VALUES ('7', 'LEGEND');
INSERT INTO pokemon_subtypes VALUES ('8', 'Level-Up');
INSERT INTO pokemon_subtypes VALUES ('9', 'MEGA');
INSERT INTO pokemon_subtypes VALUES ('10', 'Pokemon Tool');
INSERT INTO pokemon_subtypes VALUES ('11', 'Pokemon Tool F');
INSERT INTO pokemon_subtypes VALUES ('12', 'Restored');
INSERT INTO pokemon_subtypes VALUES ('13', 'Rockets Secret Machine');
INSERT INTO pokemon_subtypes VALUES ('14', 'Special');
INSERT INTO pokemon_subtypes VALUES ('15', 'Stadium');
INSERT INTO pokemon_subtypes VALUES ('16', 'Stage 1');
INSERT INTO pokemon_subtypes VALUES ('17', 'Stage 2');
INSERT INTO pokemon_subtypes VALUES ('18', 'Supporter');
INSERT INTO pokemon_subtypes VALUES ('19', 'TAG TEAM');
INSERT INTO pokemon_subtypes VALUES ('20', 'Technical Machine');
INSERT INTO pokemon_subtypes VALUES ('21', 'V');
INSERT INTO pokemon_subtypes VALUES ('22', 'VMAX');
INSERT INTO pokemon_subtypes VALUES ('23', 'Rapid Strike');
INSERT INTO pokemon_subtypes VALUES ('24', 'Single Strike');

-- pokemon_types
INSERT INTO pokemon_types VALUES ('0', 'Colorless');
INSERT INTO pokemon_types VALUES ('1', 'Darkness');
INSERT INTO pokemon_types VALUES ('2', 'Dragon');
INSERT INTO pokemon_types VALUES ('3', 'Fairy');
INSERT INTO pokemon_types VALUES ('4', 'Fighting');
INSERT INTO pokemon_types VALUES ('5', 'Fire');
INSERT INTO pokemon_types VALUES ('6', 'Grass');
INSERT INTO pokemon_types VALUES ('7', 'Lightning');
INSERT INTO pokemon_types VALUES ('8', 'Metal');
INSERT INTO pokemon_types VALUES ('9', 'Psychic');
INSERT INTO pokemon_types VALUES ('10', 'Water');


-- INSERT INTO pokemon_card (
--     pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types, evolvesFrom, 
--     first_skill_type, first_skill_type_cost, first_skill_colorless_cost, first_skill_attack_damage,
--     second_skill_type, second_skill_type_cost, second_skill_colorless_cost, second_skill_attack_damage,
--     isAbilities, weaknesses, resistances, convertedRetreatCost, img_url, isDelete
-- ) 

-- Vスタートデッキ水　ホエルオー,Vスタートデッキ草　フシギバナ
INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, 
    img_url, isDelete
) VALUES (
    'SD085', 'エネルギーつけかえ', '2', '{6}', 
    'https://www.pokemon-card.com/assets/images/card_images/large/SD/038357_T_ENERUGITSUKEKAE.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, 
    img_url, isDelete
) VALUES (
    'SD102', '大きなおまもり', '2', '{6}', 
    'https://www.pokemon-card.com/assets/images/card_images/large/SD/038374_T_OOKINAOMAMORI.jpg', '0'
);

--  スターターセットVMAX リザードン
INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, 
    img_url, isDelete
) VALUES (
    'SC2016', 'リセットスタンプ', '2', '{6}',
    'https://www.pokemon-card.com/assets/images/card_images/large/SC2/038902_T_RISETTOSUTANPU.jpg', '0'
);

-- 拡張パック「仰天のボルテッカー」
INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, 
    img_url, isDelete
) VALUES (
    'S4091', '望遠スコープ', '2', '{6,10}', 
    'https://www.pokemon-card.com/assets/images/card_images/large/S4/038589_T_BOUENSUKOPU.jpg', '0'
);

-- 強化拡張パック「ジージーエンド」
INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, 
    img_url, isDelete
) VALUES (
    'SM10a047', 'くろおび', '2', '{6,10}', 
    'https://www.pokemon-card.com/assets/images/card_images/large/SM10a/036587_T_KUROOBI.jpg', '0'
);

-- 強化拡張パック「リミックスバウト」
INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, 
    img_url, isDelete
) VALUES (
    'SM11a052', 'グレートキャッチャー', '2', '{6}', 
    'https://www.pokemon-card.com/assets/images/card_images/large/SM11a/036956_T_GURETOKYACCHA.jpg', '0'
);

INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, 
    img_url, isDelete
) VALUES (
    'SM11a059', 'ウィークガードエネルギー', '0', '{14}', 
    'https://www.pokemon-card.com/assets/images/card_images/large/SM11a/036963_E_UIKUGADOENERUGI.jpg', '0'
);

-- 拡張パック「タッグボルト」
INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types, 
    first_skill_type, first_skill_type_cost, first_skill_attack_damage,
    second_skill_type, second_skill_type_cost, 
    isAbilities, weaknesses, resistances, convertedRetreatCost, img_url, isDelete
) VALUES (
    'SM9038', 'ゲンガー&ミミッキュGX', '1', '{2,4,19}', '240', '9', 
    '9', '2', '50', 
    '9', '1',
    '0', '1', '4', '2', 'https://www.pokemon-card.com/assets/images/card_images/large/SM9/035982_P_GENGAMIMIKKYUGX.jpg', '0'
);

-- スターターセット TAG TEAM GX 「エーフィ&デオキシスGX」
INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types, 
    first_skill_type, first_skill_type_cost, 
    second_skill_type, second_skill_type_cost, second_skill_attack_damage,
    isAbilities, weaknesses, convertedRetreatCost, img_url, isDelete
) VALUES (
    'SMM002', 'ジラーチGX', '1', '{2,4}', '160', '9', 
    '9', '1', 
    '9', '3', '100',
    '1', '9', '1', 'https://www.pokemon-card.com/assets/images/card_images/large/SMM/036843_P_JIRACHIGX.jpg', '0'
);

-- 拡張パック「白銀のランス」
INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, 
    img_url, isDelete
) VALUES (
    'S6H069', '頂への雪道', '2', '{15}', 
    'https://www.pokemon-card.com/assets/images/card_images/large/S6H/039430_T_ITADAKIHENOYUKIMICHI.jpg', '0'
);

-- 拡張パック「一撃マスター」
INSERT INTO pokemon_card (
    pokemon_card_id, pokemon_card_name, supertype, subtypes, hp, types,  
    first_skill_type, first_skill_type_cost, first_skill_colorless_cost, first_skill_attack_damage,
    second_skill_type, second_skill_type_cost, second_skill_colorless_cost, second_skill_attack_damage,
    isAbilities, weaknesses, convertedRetreatCost, img_url, isDelete
) VALUES (
    'S5I035', 'イシヘンジン', '1', '{2,24}', '130', '4', 
    '4', '1', '1', '30', 
    '4', '2', '1', '120',
    '0', '6', '3', 'https://www.pokemon-card.com/assets/images/card_images/large/S5I/039095_P_ISHIHENJIN.jpg', '0'
);