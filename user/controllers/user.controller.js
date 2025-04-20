const con = require('../db/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.register = async (req, res) => {
    try {
        const { username, email, password , phone } = req.body;
        const hashedPass = await bcrypt.hash(password, 10);

        const result = await con.query(
            "INSERT INTO banda (username, email, password , phone) VALUES ($1, $2, $3 , $4) RETURNING *",
            [username, email, hashedPass , phone]
        );

        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error");
    }
};

module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await con.query("SELECT * FROM banda WHERE email=$1", [email]);

        const user = result.rows[0];
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });  // Fixed response chaining
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
            expiresIn: "1h"
        });
        res.json({ token });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error");
    }
};

module.exports.userInfo = (req, res) => {
    // This endpoint returns the decoded user info from the token
    res.json({ user: req.user });
};

module.exports.all = async (req , res) => {
    try{
        const result = await con.query("SELECT * FROM banda");
        const rows = result.rows;
        res.json({rows});
    }catch(err){
        res.status(500).send("Cannot fetch all the users");
    }
}