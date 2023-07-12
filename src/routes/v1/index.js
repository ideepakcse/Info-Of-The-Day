const express=require('express');

const router=express.Router();

const factRoutes =require('./fact-routes');
router.use('/facts',factRoutes);

const userRoutes = require('./user-routes');
router.use('/users',userRoutes);

module.exports=router;