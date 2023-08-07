const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://tejanoule007:7zvrUEvqSyzCKBvB@cluster0.ktpviuw.mongodb.net/Polling_System');

// Code for using the cloud mongodb atlas 
const connectParams={
        strictQuery:false,
            useNewUrlParser:true,
            useUnifiedTopology:true
        }


// Code for manually using the mongodb of local system

const db = mongoose.connection

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log("successfully connected to database : mongoDB");
});

module.exports = mongoose;