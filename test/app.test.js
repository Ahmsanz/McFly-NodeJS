const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const should = chai.should();


chai.use(chaiHttp);

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
        let note = {
            noteId: '213',
            userId: 'dsdwe',
            content: 'Lorem ipsum'
        }        
        chai.request(app)
            .get(`/notes/by/${note.userId}`)
            .send(note)
            .then( res => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.userId.should.be.eql('dsdwe');
            })
            .catch( err => {throw err})

    })
})