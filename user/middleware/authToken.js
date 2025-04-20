const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const token = req.headers.authorization && req.headers.authorization.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Missing Token" });  // Fixed typo here
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);  // Use env variable for secret key
        req.user = decoded;
        next();
    } catch (error) {
        console.error("Token verification failed:", error.message);
        res.status(401).json({ message: "Invalid Token" });
    }
}

module.exports = verifyToken;
