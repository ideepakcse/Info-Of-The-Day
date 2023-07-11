const express = require('express');
const router =express.Router();

const { FactController } = require('../../controllers');

router.post('/',FactController.createFact);

module.exports=router;