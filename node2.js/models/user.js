const { createHmac, randomBytes } = require('crypto');
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    salt: { type: String },
    password: { type: String, required: true },
    profileImageURL: { type: String, default: "/images/default.jpeg" },
    role: { type: String, enum: ["USER", "ADMIN"], default: "USER" }
}, { timestamps: true });

// Hash password before saving
userSchema.pre("save", function(next) {
    const user = this;
    if (!user.isModified("password")) return next();
    const salt = randomBytes(16).toString('hex');
    user.salt = salt;
    user.password = createHmac('sha256', salt).update(user.password).digest('hex');
    next();
});

// Static method to verify password
userSchema.statics.matchPasswordAndGenerateToken = async function(email, password) {
    const user = await this.findOne({ email });
    if (!user) throw new Error('User not found!');
    const userProvidedHash = createHmac('sha256', user.salt).update(password).digest('hex');
    if (user.password !== userProvidedHash) throw new Error('Incorrect password');
    
    
    return "DUMMY_TOKEN";  
};

const User = model('User', userSchema);
module.exports = User;
