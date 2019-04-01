const bcrypt = require('bcryptjs');

// hash a pw
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const db = require('./database/dbConfig');
const Users = require('./users/users-model');

const server = express();

server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    res.send('Johnny 5 is ALIVE!')
});

server.post('/api/register', (req, res) => {
    let user = req.body;

    Users.add(user)
    .then(saved => {
        res.status(201).json(error);
    });
});

server.post('api/login', (req, res) => {
    let { username, password } = req.body;

    Users.findby({ username })
    .first()
    .then(user => {
        if (user) {
            res.status(200).json({ message: `Come on in, ${user.username}!`})
        }
        else
        res.status(401).json({ message: 'Did you fat-finger your creds?'});
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

server.get('api/users', (req, res) => {
    Users.find()
        .
})




const credentials = req.body;
const hash = bcrypt.hashSync(credentials, password, 14);

// verify pw
const credentials = req.body;

// find user in db by username
if (!user || !bcrypt.compareSync(credentials.password, user.password))
    return res.status(401).json({error: 'Incorrect credentials.'})

