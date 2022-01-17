const mongoose = require("mongoose");


const DB = "mongodb+srv://harinder:gurpreet@cluster0.34c8d.mongodb.net/dcdata?retryWrites=true&w=majority";

mongoose.connect(DB, {
  
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));