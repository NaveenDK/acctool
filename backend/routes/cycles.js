const router = require('express').Router()
const Cycle = require('../models/cycle.model')


router.route('/').get((req,res)=>{
    console.log("getting cycles ..")
    Cycle.find()
    .then(cycle=>res.json(cycle))
    .catch(err=>res.status(400).json("Error "+ err))
})


router.route('/add').post((req,res)=>{
// let fullname=req.body.firstname+req.body.lastname
// const username = fullname;
console.log("add reached")
const startDate= Date.parse ( req.body.startDate) 
const endDate=  Date.parse ( req.body.endDate) 
//const goals=req.body.users.goals

const users=req.body.users


const newCycle=new Cycle({
    startDate,endDate,users
})


router.route('/:id').get((req,res)=>{
    Cycle.findById(req.params.id)
    .then(cycle=>res.json(cycle))
    .catch(err=>res.status(400).json('Error:' + err))
})


router.route('/:id').delete((req,res)=>{
    Cycle.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Cycle deleted'))
    .catch(err=>res.status(400).json('Error: '+ err))
})

router.route('/update/:id').post((req,res)=>{
    Cycle.findById(req.params.id)
     .then(cycle=>{
        cycle.startDate = req.body.startDate
        cycle.endDate=req.body.endDate
        cycle.users=req.body.users
     })
})
newCycle.save()
.then(()=>res.json('Cycle Added' ))
.catch(err=>res.status(400).json('Error '+err))
})

module.exports = router