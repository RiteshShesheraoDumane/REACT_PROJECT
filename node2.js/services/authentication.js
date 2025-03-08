const jwt = require("jsonwebtoken");
const createTokenForUser = (user) => {
    return jwt.sign(
        { id: user._id, email: user.email, role: user.role },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
    );
};

module.exports = { createTokenForUser };
