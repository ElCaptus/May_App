const express = require('express')
const morgan = require('morgan')
const path = require('path')

const {mongoose} = require('./database')

const app = express()

const PORT = 3000

// settings
app.set('port', process.env.PORT || PORT)

//middlewares
app.use(morgan('dev'))
app.use(express.json())

//statics files
app.use(express.static(path.join(__dirname,'public')))

//routes
app.use('/api/',require('./routes/poke.routes'))

const server = app.listen(app.get('port'), ()=>{
    console.log(`Running at ${app.get('port')}`)
})