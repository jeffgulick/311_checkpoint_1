const express = require('express');
const controller = require('../controllers/users');
const router = express.Router();

router.get('/', controller.getAllUsers);

router.get('/:id', controller.getUserById);

router.post('/', controller.createUser);

// router.put('/:id', controller.updateUserById);

router.delete('/:id', controller.deleteById);


module.exports = router