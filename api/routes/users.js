const express = require('express');
const controller = require('../controllers/users.controller');

const router = express.Router();

// User routes
router
    /**
 * @api {POST} /users/register
 * @apiDescription creates a new user with the data provided
 * @apiVersion 1.0.0
 * @apiGroup users
 * @apiParams first name, last name, email and password provided by the user
 * @apiSuccess (200) User created
 * @apiFailure (400) Some parameter is missing
 */
    .post('/register', controller.register)

    /**
 * @api {POST} /users/login
 * @apiDescription grants access to the user
 * @apiVersion 1.0.0
 * @apiGroup users
 * @apiParams email and password provided by the user
 * @apiSuccess (200) User access granted
 * @apiFailure (404) User does not exist; (400) Password does not match.
 */
    .post('/login', controller.login)


module.exports = router; 