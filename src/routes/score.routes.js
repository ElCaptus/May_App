const express = require('express')
const router = express.Router()
const ScoreSchema = require('../models/Scores')

router.get('/',async (req,res)=>{
    const scores = await ScoreSchema.find()
    res.json(scores)
})

router.post('/', async (req,res)=>{
    const {name, errors_attached} = req.body
    const date = new Date()
    let status = 'saved'
    const newScore = new ScoreSchema({name,errors_attached, date})
    await newScore.save().catch(err =>{
        console.error(err)
        status = err
    })
    res.json({
        status,
        score:{
            name,
            errors_attached,
            date: date.valueOf()
        }
    })
})

router.delete('/:id', async (req,res)=>{
    await ScoreSchema.findByIdAndRemove(req.params.id)
    res.json({
        status: `Score ${req.params.id} Removed`
    })
})

module.exports = router