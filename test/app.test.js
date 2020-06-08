const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const should = chai.should();


chai.use(chaiHttp);

// TESTING NOTES ROUTES

describe('/GET', () => {
    it('should GET all the notes', async () => {
        chai.request(app)
            .get('/notes/')
            .then( res => {
                res.should.have.status(200);
                res.body.should.be.a('array');
            })
            .catch( err => {throw err});
            
    });
});

describe('/POST create', () => {
    it('it should POST a new note to the database', done => {
        let newNote = {
            noteId: '213',
            userId: 'dsdwe',
            content: 'Lorem ipsum'
        }

        chai.request(app)
            .post('/notes/create')
            .send(newNote)
            .end( (err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.userId.should.be.eql('dsdwe');
            done();
            });
    });
});

describe('/GET/by/:userId', () => {
    it('should get the notes created by a single user', async () => {
        
        chai.request(app)
            .get(`/notes/by/:userId`)
            .then( res => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.lenght.should.be.equl(0)               
            })
            .catch( err => {throw err})

    });
});

describe('/GET notes by id', () => {
    it('should get a single note by its ID', async () => {
        chai.request(app)
            .get('/notes/note/:noteId')
            .then( res => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.length.should.be.eql(1);
            })
            .catch( err => {throw err});
    });
});

// TESTING USER ROUTES

describe('/POST register', () => {
    it('it should POST a new user to the database', done => {
        let newUser = {
            first_name: 'John',
            last_name: 'Doe',
            email: 'john@doe.com',
            password: 'secret password',
            fav_notes: ['someID', 'someOtherID']
        }

        chai.request(app)
            .post('/users/register')
            .send(newUser)
            .end( (err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.last_name.should.be.eql('Doe');
            done();
            });
    });
});

describe('/PUT fav', () => {
    it('should modify an user and add a note as favourite', done => {
        let user = {
            userId: '123',
            first_name: 'John',
            last_name: 'Doe',
            email: 'john@doe.com',
            password: 'secret password',
            fav_notes: ['someID', 'someOtherID']
        };
        // TODO: user should actually be saved to the database to run the test
               
        chai.request(app)
            .put('/users/user/123/fav')
            .send({userId: '123', first_name:'John', fav_notes: '456'})
            .end( (err, res) => {
                res.body.fav_notes.should.contain('456');
                done();
            });
    });
});

describe('/GET user favs', () => {
    it("should retrieve the user's favourites array", async () => {
        chai.request(app)
            .get('/users/:userId/favs')
            .then( res => {
                res.should.have.status(200);
                res.body.should.be.a('array');
            })
            .catch( err => {throw err}); 
    })
})