const { v4: uuidv4 } = require('uuid');
class User {
    constructor(
        first_name,
        last_name,
        email, 
        password,
        favNotes
    ) {
        this.userId = uuidv4();
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email; 
        this.password = password;
        this.favNotes = favNotes || [];
    }
}

module.exports = User; 