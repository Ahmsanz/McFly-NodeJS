const { v4: uuidv4 } = require('uuid');
class Note {
    constructor (
        userId,
        content,
        favBy
    )  {
        this.noteId = uuidv4();
        this.userId = userId; 
        this.content = content;
        this.favBy = favBy;
    }
}

module.exports = Note; 