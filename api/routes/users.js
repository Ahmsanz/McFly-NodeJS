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

    /**
 * @api {PUT} /users/user/:userId/fav
 * @apiDescription adds a given note Id to the user's favourites notes array
 * @apiVersion 1.0.0
 * @apiGroup users
 * @apiParams userId
 * @apiReqBody noteId
 * @apiSuccess (200) note added as favourite; retrieves user with note added.
 * @apiFailure (400) note not added as favourite
 */
    .put('/user/:userId/fav', controller.fav)

    /**
 * @api {PUT} /users/user/:userId/rmfav
 * @apiDescription removes one specific note ID from the favourites notes array
 * @apiVersion 1.0.0
 * @apiGroup users
 * @apiParams userId
 * @apiReqBody noteId
 * @apiSuccess (200) note removed as favourite
 * @apiFailure (400) won't remove the note ID
 */

   .put('/user/:userId/rmfav', controller.rmFav)

   /**
 * @api {GET} /users/:userId/favs
 * @apiDescription retrieves the notes marked as favourite by a certain user
 * @apiVersion 1.0.0
 * @apiGroup users
 * @apiParams userId
 * @apiSuccess (200) retrieves an array of notes
 * @apiFailure (404) no favourite notes found
 */
   .get('/:userId/favs', controller.getFavs)


module.exports = router; 