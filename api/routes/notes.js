const express = require('express');
const controller = require('../controllers/notes.controller');

const router = express.Router();

// notes routes
router
    /**
     * @api {POST /notes/create
     * @apiDescription creates a new user with the content provided
     * @apiVersion 1.0.0
     * @apiGroup notes
     * @apiParams userId, content
     * @apiSuccess (200) note created successfully
     * @apiFailure (400) some parameter is missing
     */
    .post('/create', controller.create)



module.exports = router;