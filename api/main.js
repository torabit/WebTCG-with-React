const express = require('express');
const router = express();
const port = 3001;
const conection = require('./common/postgres.js');
const login = require('./apis/login.js');
const getCards = require('./apis/getCards.js');
const createDeck = require('./apis/createDeck.js');
const getDeck = require('./apis/getDeck.js');

router.use(express.json())
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get('/login', (req, res) => {
    const pool = conection.conection();
    login.login(req, res, pool);
});

router.post('/login', (req, res) => {
    const pool = conection.conection();
    login.login(req, res, pool);
});

router.get('/getcards', (req, res) => {
    const pool = conection.conection();
    getCards.getCards(req,res,pool);
});

router.post('/getcards', (req, res) => {
    const pool = conection.conection();
    getCards.getCards(req,res,pool);
});

router.get('/createdeck', (req, res) => {
    const pool = conection.conection();
    createDeck.createDeck(req,res,pool);
});

router.post('/createdeck', (req, res) => {
    const pool = conection.conection();
    createDeck.createDeck(req,res,pool);
});

router.get('/getdeck', (req, res) => {
    const pool = conection.conection();
    getdeck.getdeck(req,res,pool);
});

router.post('/getdeck', (req, res) => {
    const pool = conection.conection();
    getDeck.getDeck(req,res,pool);
});

router.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
