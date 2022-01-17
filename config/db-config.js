const dotenv = require('dotenv')
dotenv.config()

const mongoose = require('mongoose')

mongoose.connect(process.env.URL, (e) => {
    if (e) throw e

    console.log('DB connected')
})

module.exports = mongoose