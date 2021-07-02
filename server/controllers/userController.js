const user = require('../models/user');
const express = require("express");
const router = express.Router();
// const { MongoClient } = require("mongodb");
const { MONGODB_URI } = require('dotenv').config({path: "./config/.env"});

module.exports.get_all = (req, res) => {
    user.find({}, (err, users)=>{
       err ? res.json(err) : res.json(users);
    });
}

module.exports.get_signup = (req, res) => {
    if (req.query) {
        const user1 = req.query;
        // console.log(req.query.username);
        user.create(user1,
        (err, user) => err ? res.json(err) : res.json(user));
    } else {
        res.json("No user query submitted");
    }
}

module.exports.get_login = (req, res) => {
    if (req.query) {
        const user1 = req.query;
        user.find(user1, (err, user) => err ? res.json(err) : res.json(user));
    } else {
        res.json("No user query submitted");
    }
}

module.exports.get_userdata = (req, res) => {
    if (req.query) {
        const user1 = {username: req.query.username};
        user.find(user1, (err, user) => err ? res.json(err) : res.json(user));
    } else {
        res.json("No user query submitted");
    }
}

module.exports.updateCourses = (req, res) => {
    if (req.query) {
        const user1 = {username: req.query.username};
        
        var newvalues = { $set: {courses: req.query.courses}};
        console.log(req.query.courses);

        user.updateOne(user1, newvalues, (err, user) => err ? res.json(err) : res.json(user));
    } else {
        res.json("No Course query submitted");
    }
}