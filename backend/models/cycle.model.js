const mongoose=require('mongoose')

const Schema = mongoose.Schema;

const cycleSchema= new Schema({
     
     startDate:{type:Date,required:true},
     endDate:{type:Date,required:true},
     users:[
       {
        firstName:String,
        lastName:String,
        goals:[{
            main:String,
            subtasks:[
                String
            ]
        }]
       },

      
     ],
   

    
},{
    timestamps:true
})

const Cycle= mongoose.model('Cycle', cycleSchema)

module.exports = Cycle


