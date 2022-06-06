const express = require('express')
const router = express.Router()
const ScoreSchema = require('../models/Scores')

const levels= {
    1: "easy",
    2: "medium",
    3: "hard",
    4: "insane"
}

router.get('/',async (req,res)=>{
    const scores = await ScoreSchema.find()
    res.json(scores)
})

router.get('/:id', async (req,res)=>{
    try{
        const scores = await ScoreSchema.findById(req.params.id)
        res.json(scores)
    }
    catch{
        res.json({message: 'Invalid id'})
    }

})

router.post('/', async (req,res)=>{
    const {name, errors_attached, level} = req.body
    const date = new Date()
    let status = 'saved'
    const newScore = new ScoreSchema({name,errors_attached, date, level})
    await newScore.save().catch(err =>{
        console.error(err)
        status = err
    })
    res.json({
        status,
        score:{
            name,
            errors_attached,
            date: date.valueOf(),
            level
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