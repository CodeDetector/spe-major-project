const mongoose = require('mongoose')


const locationSchema = new mongoose.Schema({ 
    name: {
        type: String,
        // required: true,
    },
    city : {
        type : String , 
        // required : true 
    } , 
    availability: {
        type : Number, 
        // required : true 
    },
    images : [{
        type: String 
    }],
    description : {
        type : String ,
    },
    address:{
        type : String , 
        // required : true  
    } , 
    artist:{
        type : String 
    } , 
    entry_charge : {
        type : Number,
    },
    Offers :{
        type: String ,
    },
    Venue:{
        type: String,        
    } ,
    contact:{
        type: String,
    }
});


module.exports = mongoose.model('location' , locationSchema) ; 