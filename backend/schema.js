const mongoose =require('mongoose')

const BookSchema= new mongoose.Schema({
    title:{
        type:String,
       
        require:true
    },
    genre:{
        type:String,
        
        require:true
    },
    author:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model('book',BookSchema)