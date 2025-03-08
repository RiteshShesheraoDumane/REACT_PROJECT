const { Router } = require("express");
const multer = require('multer');
const path = require('path');
const Blog = require('../models/blog');


//The disk storage engine gives you full control on storing files to disk. 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(`./public/uploads/`));
    },
    filename: function (req, file, cb) {
        const filename = `${Date.now()}-${file.originalname}`;
        cb(null, filename);
    }
});


const upload = multer({ storage });

const router = Router();
router.get('/add-new', (req, res) => {
    return res.render("add-blogs", {
        user: req.user,
    });
});

router.post("/submit-blog", upload.single("coverImage"), async (req, res) => {
    const {title,body}= req.body;
    const blog= await Blog.create({
body,
title,
createdBY:req.user._id,
coverimageurl: `/uploads/${req.user._id}/${req.file.filename}`,

    });
   
    return res.redirect("/");

   
    });

module.exports = router;
