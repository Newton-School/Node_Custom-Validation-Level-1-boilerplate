/* User Model */
const mongoose = require('mongoose');

/*
Add custom validation to the User model
Validate that the username is at least 4 characters long, doesn't contain spaces, and doesn't contain special characters
*/
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
