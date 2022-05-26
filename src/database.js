const mongoose = require('mongoose')

const URI = 'mongodb://localhost/mern_pokemons'

mongoose.connect(URI)
    .then(db => console.log('mern_app DB is connected'))
    .catch(err => console.error(err))

module.exports = mongoose