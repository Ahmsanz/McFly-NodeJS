class Note {
    constructor (
        userId,
        content,
        favBy
    )  {
        let noteId = 'someId';
        this.userId = userId; 
        this.content = content;
        this.favBy = favBy;
    }
}

module.exports = Note; 