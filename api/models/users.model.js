const { v4: uuidv4 } = require('uuid');
class User {
    constructor(
        first_name,
        last_name,
        email, 
        password,
        fav_notes
    ) {
        this.userId = uuidv4();
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email; 
        this.password = password;
        this.fav_notes = fav_notes || [];
    }
}

module.exports = User; 