const bcrypt = require('bcryptjs');

// hash a pw
const credentials = req.body;
const hash = bcrypt.hashSync(credentials, password, 14);

// verify pw
const credentials = req.body;

// find user in db by username
if (!user || !bcrypt.compareSync(credentials.password, user.password))
    return res.status(401).json({error: 'Incorrect credentials.'})

