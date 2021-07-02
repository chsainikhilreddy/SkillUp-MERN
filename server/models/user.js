const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    courses: {
        type: String,
        required: true
    },
    country: {
        type: String
    },
    gender: {
        type: String
    },
    finishedCourses: {
        type: String
    }
});

module.exports = mongoose.model('User', userSchema);
