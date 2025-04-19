const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menu.controller');


router.get('/all', menuController.getMenus);
router.post('/category' , menuController.category);

module.exports = router;