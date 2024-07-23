const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

// index 
const router = express.Router();

router.get('/', AppController.index);
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getStudentsByMajor);

module.exports = router;
