const express = require('express');
const router = express.Router();
const Authentication =require('../middlewares/Auth')
const {verifyToken,verifyAuthorization}=require('../middlewares/verifyToken')
const body_parser = require('body-parser');
router.use(body_parser.json());

router.use(Authentication)


module.exports=router