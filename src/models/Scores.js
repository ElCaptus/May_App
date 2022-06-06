const mongoose = require('mongoose')
const {Schema} = mongoose

const ScoreSchema = new Schema({
    name: { type: String, required: true},
    errors_attached: { type: Number, required: true},
    date: { type: Date, required: true},
    level: { type: String, required: true}
})

module.exports = mongoose.model('Score', ScoreSchema)