const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://shahzain:12shah34zain@mydatabase.lboguaf.mongodb.net/test')
.then(()=>{
console.log("connected to database")
})
.catch(()=>{
console.log("connection fail")
})


const logInSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})


const collection = new mongoose.model('collection1',logInSchema)

module.exports=collection
 



