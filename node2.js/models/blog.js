const { Schema, model } = require('mongoose');

const blogSchema = new Schema({
    title: {
        type: String,  
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    coverimageurl: {
        type: String,
        required: false,
    },
    createdBY: {
        type: Schema.Types.ObjectId,  // ✅ 'schema.type.objectid' ऐवजी 'Schema.Types.ObjectId' वापरले.
        ref: "user",
    },
}, { timestamps: true });

const Blog = model('Blog', blogSchema);
module.exports = Blog;
