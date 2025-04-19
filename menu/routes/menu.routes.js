const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menu.controller');

router.get('/' , (req,res)=>{
    res.send("Hola Amigo");
})
router.get('/menu', menuController.getMenus);
router.post('/category' , menuController.category);

module.exports = router;