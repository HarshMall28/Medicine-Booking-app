const express = require("express");
const router = express.Router();
const path = require("path");

router.get('^/$|/MainScreen(.html)?', (req, res) => {
    //res.sendFile('./views/index.html', { root: _dirname });
    res.sendFile(path.join(__dirname, '..', 'views', 'MainScreen.html'));
});
router.get('/Checkout(.html)?', (req, res) => {
    //res.sendFile('./views/index.html', { root: _dirname });
    res.sendFile(path.join(__dirname, '..', 'views', 'Checkout.html'));
});
router.get('/Description(.html)?', (req, res) => {
    //res.sendFile('./views/index.html', { root: _dirname });
    res.sendFile(path.join(__dirname, '..', 'views', 'Description.html'));
});

router.get('/Redirect(.html)?', (req, res) => {
    //res.sendFile('./views/index.html', { root: _dirname });
    res.sendFile(path.join(__dirname, '..', 'views', 'Redirect.html'));
});

router.get('/PaymentGateway(.html)?', (req, res) => {
    //res.sendFile('./views/index.html', { root: _dirname });
    res.sendFile(path.join(__dirname, '..', 'views', 'PaymentGateway.html'));
});

router.get('/success(.html)?', (req, res) => {
    //res.sendFile('./views/index.html', { root: _dirname });
    res.sendFile(path.join(__dirname, '..', 'views', 'success.html'));
});

router.get('/index(.html)?', (req, res) => {
    //res.sendFile('./views/index.html', { root: _dirname });
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

module.exports = router;