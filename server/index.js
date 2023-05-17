const express = require('express');
const app = express();
const cors = require("cors");
// const logger = require("./logger");

console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());


var MongoClient = require('mongodb').MongoClient;
const data = require('./clubs.json');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const connectionString = "mongodb://mongo:27017/party-owl-db";

// const connectionString = "mongodb://127.0.0.1:27017/party-owl-db"
mongoose.connect(connectionString , {useNewUrlParser  : true});

let conn = mongoose.connection 

conn.on('open' , () =>{
    console.log("Connection opened")
})


const locationRouter = require('./routes/location')
app.use('/location' , locationRouter) 
// Schema for users of app

// For backend and express


// app.get('/getCity' , function(req,res) {
//     MongoClient.connect(dbConfig.url, function(err, db) {
//         useNewUrlParser: true
//         if (err) throw err;
//         var dbo = db.db("party-owl-db");
//         var city = req.body.city
//         dbo.collection("Location").find({city:city}).toArray(function(err, result) {
//             if (err) throw err;
//             res.send(result);
//             db.close();
//         });
//     });
// })
// app.post('/update', function(req, res) {

//     MongoClient.connect(dbConfig.url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("party-owl-db");
//         var myquery = {
//             avenger: req.body.title
//         };
//         var newvalues = {
//             $set: {
//                 avenger: req.body.title,
//                 weapon: req.body.weapon
//             }
//         };
//         dbo.collection("weapons").updateOne(myquery, newvalues, function(err, result) {
//             if (err) throw err;
//             res.send("1 document updated with title: " + req.body.title);
//             db.close();
//         });
//     });
// })
// app.get('/getLocation' , function(req,res) {
//     MongoClient.connect(dbConfig.url, function(err, db) {
//         useNewUrlParser: true
//         if (err) throw err;
//         var dbo = db.db("party-owl-db");
//         var address = req.body.address
    
//         dbo.collection("Location").find({address : address}).toArray(function(err, result) {
//             if (err) throw err;
//             res.send(result);
//             db.close();
//         });
//     });
// })
// app.post("/addLocation", async (req, resp) => {
//     try {
//         const user = new Location(req.body);
//         let result = await user.save();
//         result = result.toObject();
//         if (result) {
//             resp.send("Location added to the database");
//             console.log(result);
//         } else {
//             console.log("User already register");
//         }
 
//     } catch (e) {
//         resp.send("Something Went Wrong");
//     }
// });
app.listen(5000 , ()=>{
    console.log("Connected to port 5000 !!")
});