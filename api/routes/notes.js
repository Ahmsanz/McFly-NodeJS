const express = require('express');
const controller = require('../controllers/notes.controller');

const router = express.Router();

// notes routes
router
    /**
     * @api {POST} /notes/create
     * @apiDescription creates a new user with the content provided
     * @apiVersion 1.0.0
     * @apiGroup notes
     * @apiParams userId, content
     * @apiSuccess (200) note created successfully
     * @apiFailure (400) some parameter is missing
     */
    .post('/create', controller.create)

     /**
     * @api {GET} /notes/
     * @apiDescription retrieves all existing notes
     * @apiVersion 1.0.0
     * @apiGroup notes
     * @apiParams 
     * @apiSuccess (200) lists existing notes
     * @apiFailure (400) won't give the notes
     */
    .get('/', controller.allNotes)

     /**
     * @api {POST /notes/:userId
     * @apiDescription retrieves the notes created by a given user
     * @apiVersion 1.0.0
     * @apiGroup notes
     * @apiParams userId
     * @apiSuccess (200) lists user's notes
     * @apiFailure (400) won't give the user's notes
     */
    .get('/by/:userId', controller.notesByUser)

     /**
     * @api {GET} /notes/:noteId
     * @apiDescription retrieves one specific note
     * @apiVersion 1.0.0
     * @apiGroup notes
     * @apiParams noteId
     * @apiSuccess (200) gives one single note
     * @apiFailure (400) won't give the note
     */
    .get('/note/:noteId', controller.getSingleNote)


module.exports = router;