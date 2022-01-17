const dotenv = require('dotenv')
dotenv.config()

const express_session = require('express-session')
const session = express_session({
    secret              : process.env.SECRET,
    saveUninitialized   : true,
    cookie              : { maxAge: 1000 * 60 * 60 * 2 },
    resave              : false
})

module.exports = session