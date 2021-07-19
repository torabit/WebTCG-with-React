const express = require('express');
const router = express();

// config
require('dotenv').config();
const url = process.env.API_DB_URL; // api url
const port = process.env.API_DB_PORT; // api port

// postgres接続モジュール
const conection = require('./common/postgres.js');
// 各api実行ファイル
// ログインモジュール
const login = require('./apis/login.js');
// カード取得モジュール
const getCards = require('./apis/getCards.js');
// デッキ作成モジュール
const createDeck = require('./apis/createDeck.js');
// デッキ取得モジュール
const getDeck = require('./apis/getDeck.js');

// express設定
router.use(express.json())
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// ログイン
router.get('/login', (req, res) => {
    login.login(req, res, conection.conection());
    conection.end();
});

router.post('/login', (req, res) => {
    login.login(req, res, conection.conection());
    conection.end();
});

// カード取得
router.get('/getcards', (req, res) => {
    getCards.getCards(req, res, conection.conection());
    conection.end();
});

router.post('/getcards', (req, res) => {
    getCards.getCards(req, res, conection.conection());
    conection.end();
});

// デッキ作成
router.get('/createdeck', (req, res) => {
    createDeck.createDeck(req,res,conection.conection());
    conection.end();
});

router.post('/createdeck', (req, res) => {
    createDeck.createDeck(req,res,conection.conection());
    conection.end();
});

// デッキ取得
router.get('/getdeck', (req, res) => {
    getdeck.getdeck(req,res,conection.conection());
    conection.end();
});

router.post('/getdeck', (req, res) => {
    getDeck.getDeck(req,res,conection.conection());
    conection.end();
});

// サーバー起動
router.listen(port, () => {
    console.log(`Example app listening at ${url}${port}`);
});
