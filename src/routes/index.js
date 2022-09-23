const path = require('path');
const router = require("express").Router();

const t1_controller = require('../controllers/t1');
const t2_controller = require('../controllers/t2');
const inner_controller = require('../controllers/inner');
const left_controller = require('../controllers/left');
const right_controller = require('../controllers/right');
const full_controller = require('../controllers/full');

router.get('/t1', t1_controller);
router.get('/t2', t2_controller);
router.get('/inner', inner_controller);
router.get('/left', left_controller);
router.get('/right', right_controller);
router.get('/full', full_controller);


module.exports = {
    path: "/",
    router: router
}