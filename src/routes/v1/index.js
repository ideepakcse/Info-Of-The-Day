const express=require('express');

const router=express.Router();

const factRoutes =require('./fact-routes');
router.use('/facts',factRoutes);

module.exports=router;