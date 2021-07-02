const {Router} = require('express');
const router = Router();
const user = require('../models/user');
const userController = require('../controllers/userController');
router.get('/', userController.get_all);
router.get('/signup', userController.get_signup);
router.get('/login', userController.get_login);
router.get('/getUserData', userController.get_userdata);
router.get('/updateCourses', userController.updateCourses);
router.get('/updateProfile', userController.updateProfile);

module.exports = router;