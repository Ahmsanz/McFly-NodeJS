const Note = require('../models/notes.model')

const notes = [];

/**
 * Create note
 * @public
 */
exports.create = (req, res) => {
    const { userId, content } = req.body;

    const newNote = new Note(userId, content);
    notes.push(newNote);
    res.status(200).send(newNote);
}

/**
 * Get all notes
 * @public
 */
exports.allNotes = (req, res) => {
    res.status(200).send(notes);
}

/**
 * Get notes by single user
 * @public
 */
exports.notesByUser = (req, res) => {
    const { userId } = req.params;
    
    const userNotes = notes.filter( note => note.userId === userId);

    if (userNotes) {
        res.status(200).send(userNotes);
    } else {
        res.status(404).json({msg: 'This user has posted no notes yet'});
    }
}

/**
 * Get single note
 * @public
 */
exports.getSingleNote = (req, res) => {
    const { noteId } = req.params;

    let requestedNote = notes.find(note => note.noteId === noteId);
    console.log(requestedNote);
    res.status(200).send(requestedNote);
}
