const express = require('express');
const router = express.Router();
const controller = require('../../middlewares/user/controller');

router.get('/',
    controller.getUsers
);
module.exports = router;