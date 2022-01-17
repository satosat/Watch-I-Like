const express = require('express')
const app = express()
const PORT = 3000

// Get routes
const routes = require('./routes')

// Get middlewares
const middlewares = require('./middlewares')

// Set view directory & engine
app.set('views', './views')
app.set('view engine', 'ejs')

// Use middlewares
app.use(middlewares)

// Use route
app.use(routes)

// Run
app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`)
})