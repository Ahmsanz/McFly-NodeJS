

/**
 * Register user 
 * @public
 */
exports.register = (req, res) => {
    const { first_name, last_name, email, password, fav_notes } = req.body; 

    const newUser = new User({
        first_name, 
        last_name, 
        email, 
        password, 
        fav_notes
    });
    newUser.save()
        .then( user => console.log('new user created', user))
        .catch( err => console.log('something went wrong creating the new user'))

}

/**
 * Login user
 * @public
 */
exports.login = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) throw error;

    User.findOne( email )
        .then( res => {
            if (user && user.password === password) {
                console.log(`user granted to ${user}`)
                res.send(user); 
            } else if (user && user.password !== password ){
                res.status(400).json({msg: 'The password is not correct'})
            } else {
                res.status(404).json({msg: 'The user does not exist in our database'})
            }
        })
}