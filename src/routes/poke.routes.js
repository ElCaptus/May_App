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

async function saveDB({name, pict}){
        const newPokemon = new PokemonSchema({name,pict})
        await newPokemon.save();
}

router.post('/', async (req,res)=>{
    const body = req.body
    if(Array.isArray(body)){
        for(elem of body){
            await saveDB(elem)
        }
    }else{
        await saveDB(body)
    }
    res.json({
        content: body,
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