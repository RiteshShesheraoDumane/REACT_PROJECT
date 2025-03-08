const { Router } = require("express");
const User = require('../models/user');
const router = Router();

// Signup Page Route
router.get('/signup', (req, res) => res.render("signup", { error: null, success: null }));

// Signup POST Route
router.post('/signup', async (req, res) => {
    const { fullName, email, password } = req.body;

    try {
        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.render("signup", { error: "Email already exists!", success: null });
        }

        // Create new user
        const newUser = new User({ fullName, email, password });
        await newUser.save();

        return res.render("signup", { success: "Signup successful! Please login.", error: null });
    } catch (err) {
        console.error(err);
        return res.render("signup", { error: "Something went wrong! Please try again.", success: null });
    }
});

// Signin Page Route
router.get('/signin', (req, res) => res.render("signin", { error: null, success: null }));

// Signin POST Route
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await User.matchPasswordAndGenerateToken(email, password);
        res.cookie("token", token);
        return res.render('signin', { success: "Login Successfully!", error: null });
    } catch (err) {
        console.error(err);
        return res.render('signin', { error: "Email or Password does not match!", success: null });
    }
});
 router.get('/logout',(req,res)=>{
    res.clearCookie('token').redirect("/");
 }
)

module.exports = router;
