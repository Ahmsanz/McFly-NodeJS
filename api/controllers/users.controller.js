const User = require('../models/users.model')

const users = [];
const notes = [];

/**
 * Register user 
 * @public
 */
exports.register = (req, res) => {
    const { first_name, last_name, email, password, fav_notes } = req.body; 

    const newUser = new User(
        first_name, 
        last_name, 
        email, 
        password, 
        fav_notes
    );
    
    users.push(newUser);
    console.log(users);
    res.send(newUser);

}

/**
 * Login user
 * @public
 */
exports.login = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) throw error;

    const requestedUser = users.find( user => user.email === email);
    if (requestedUser && requestedUser.password === password) {
        console.log(`access granted to ${requestedUser}`)
        res.status(200).send(requestedUser); 
    } else if (requestedUser && requestedUser.password !== password) {
        console.log('The password provided is not correct')
        res.status(400).json({msg: 'The password is not correct'})
    } else {
        res.status(404).json({msg: 'The user does not exist'})
    }

}

/**
 * Fav note
 * @public
 */
exports.fav = (req, res) => {
    const { noteId } = req.body; 
    const { userId } = req.params; 

    const updateUser = users.find( user => user.userId === userId);
    updateUser.favNotes = [...updateUser.favNotes, noteId]; 

    console.log(updateUser);
    res.status(201).send(updateUser);
}

/**
 * Remove note from favs array
 * @public
 */
exports.rmFav = ( req, res ) => {
    const { noteId } = req.body;
    const { userId } = req.params;

    const updateUser = users.find( user => userId === userId);
    updateUser.favNotes.filter( fav => fav !== noteId); 
}

/**
 * Retrieve all favourite notes
 * @public
 */
exports.getFavs = (req, res) => {
    const { userId } = req.params;

    const requestedUser = users.find( user => userId === userId);
    const userFavNotes = notes.filter( note => requestedUser.favNotes.includes(note.noteId));

    if (userFavNotes) {
        res.status(200).send(userFavNotes);
    } else {
        res.status(404).json({msg: 'The user has no favourite notes yet'});
    }
    
}