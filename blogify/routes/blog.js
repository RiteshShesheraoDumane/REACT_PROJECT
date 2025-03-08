const { Router } = require('express');
const router = Router();
const multer = require('multer');
const Blog = require('../models/blog');
const Comment = require('../models/comment');  // 🟢 Fixed: Renamed 'comment' to 'Comment' to avoid duplicate import

const path = require("path");
const upload = multer({ dest: 'uploads/' });

// 🟢 Route to render add blog page
router.get('/add-blog', (req, res) => {
    return res.render('addBlog', {
        user: req.user,
    });
});

// 🟢 Route to get a blog and its comments
router.get('/:id', async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id).populate("createdBy");
        const comments = await Comment.find({ blogId: req.params.id }).populate("createdBy");  // 🟢 Fixed: Renamed 'comment' to 'comments'
        console.log("comments", comments);
        return res.render("blog", {
            user: req.user,
            blog,
            comments,
        });
    } catch (error) {
        console.error('Error fetching blog:', error);
        res.status(500).send('Error fetching blog.');
    }
});

// 🟢 Route to add a comment
router.post("/comment/:blogId", async (req, res) => {
    try {
        await Comment.create({
            content: req.body.content,  // 🟢 Fixed: Removed extra spaces in 'content'
            blogId: req.params.blogId,
            createdBy: req.user._id,
        });
        return res.redirect(`/blogs/${req.params.blogId}`);  // 🟢 Fixed redirect path
    } catch (error) {
        console.error('Error adding comment:', error);
        res.status(500).send('Error adding comment.');
    }
});

// 🟢 Route to add a new blog
router.post('/add-new', upload.single('coverImage'), async (req, res) => {
    try {
        const { title, body } = req.body;
        const coverImageURL = req.file ? `/uploads/${req.file.filename}` : null;

        const newBlog = new Blog({
            title,
            body,
            coverImageURL,
            createdBy: req.user ? req.user._id : null,
        });

        await newBlog.save();
        res.redirect('/');
    } catch (error) {
        console.error('Error saving blog:', error);
        res.status(500).send('An error occurred while saving the blog.');
    }
});

module.exports = router;
