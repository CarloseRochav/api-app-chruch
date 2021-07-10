const express = require('express');
const router = express.Router();
const userController=require('../controllers/user.controller');


router.post("/usuarios",userController.createNewUser);

module.exports=router;