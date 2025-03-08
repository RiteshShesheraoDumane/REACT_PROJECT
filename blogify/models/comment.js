const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    blogId: {
        type: Schema.Types.ObjectId,
        ref: "Blog",  // Corrected to match model name
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",  // Corrected to match model name
    },
}, { timestamps: true });

const Comment = model('Comment', commentSchema);  // Corrected model name capitalization

module.exports = Comment;
