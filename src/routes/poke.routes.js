const express = require('express')
const pokemons = require('../models/pokemons')
const router = express.Router()

router.get('/',async (req,res)=>{
    const pokes = await pokemons.find()
    res.json({
        status: 200,
        msg: 'API Works',
        content: {
            type: "PokemonSchema[]",
            value: pokes
        }
    })
})

router.post('/', async (req,res)=>{
    console.log(req.body)
    res.send(`Tremendo lo que me queres hacer ${req.body}`)
})

module.exports = router