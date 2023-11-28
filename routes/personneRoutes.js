const express = require('express');
const personneController = require('../controllers/PersonneController');
const router = express.Router();

router.post('/register', (req, res) => personneController.registerUser(req, res));
router.post('/login', (req, res) => personneController.loginUser(req, res));
router.put('/updateUser', (req, res) => personneController.updateUser(req, res));
router.delete('/deleteUser', (req, res) => personneController.deleteUser(req, res));
router.get('/all', (req, res) => personneController.getAllUsers(req, res)); 

module.exports = router;
