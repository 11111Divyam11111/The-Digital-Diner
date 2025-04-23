const Menu = require('../models/menu.models'); // Adjust the path as needed

module.exports.getMenus = async (req, res) => {
    try {
        const allMenu = await Menu.find({});
        res.json(allMenu);
    } catch (err) {
        console.error("Error fetching menu:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports.category = async(req,res) => {
    try{
        const {item} = req.body;
        const menuItem = await Menu.find({category:item});
        res.json(menuItem);
    }catch(err){
        console.error("Error fetching menu:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};