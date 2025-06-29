// backend/routes/auth.routes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/oauth', authController.oauthCallback);
router.get('/me', authMiddleware, authController.getCurrentUser);

module.exports = router;
