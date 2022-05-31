const express = require('express')
const { route } = require('express/lib/router')
const pokemons = require('../models/pokemons')
const PokemonSchema = require('../models/pokemons')
const router = express.Router()

router.get('/',async (req,res)=>{
    const pokes = await PokemonSchema.find()
    res.json({
        status: 200,
        msg: 'API Works',
        content: {
            type: "PokemonSchema[]",
            value: pokes
        }
    })
})

router.get('/:id', async (req,res)=>{
    const pokemon = await PokemonSchema.findById(req.params.id)
    res.json(pokemon);
})

router.post('/', async (req,res)=>{
    const elem = req.body
    if(req.body.name){
        const {name, pict} = req.body
        const newPokemon = new PokemonSchema({name,pict})
        await newPokemon.save();
    }else{
        for({name, pict} of elem){
            const newPokemon = new PokemonSchema({name, pict})
            await newPokemon.save()
        }
    }
    res.json({
        content: elem,
        status: "saved"
    })
})

//si quisiera actualizar img o algo
router.put('/:id',async (req,res)=>{
    const updateObj = req.body
    const oldData = await PokemonSchema.findById(req.params.id)
    await PokemonSchema.findByIdAndUpdate(req.params.id, updateObj)
    res.json({
        status: "Pokemon Updated"
    })
})

router.delete('/:id', async (req,res)=>{
    await PokemonSchema.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Pokemon removed'
    })
})

module.exports = router