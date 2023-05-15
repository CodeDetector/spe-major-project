const express = require('express') 
const router = express.Router() 
const location = require('../models/location')
const data = require('../clubs.json')

router.get("/" , (req,res)=>{
    res.send("Get Request")
})

router.post('/addAll' ,async function(req, res) {
        try{
            // console.log(data[1])
            const locations = await location.insertMany(data.clubs)
            // console.log(locations)
            res.json(locations);
        }
        catch(err){
            console.log(err)
        }
        
});

router.get('/showall', async function(req, res) {
    try{
        const locations = await location.find({})
        res.json(locations)
        console.log(locations) 
        console.log("Sucess")
    }catch(err){
        res.send("Error : ", err ) 
    }
})
router.get('/getLocation', async function(req, res) {
    try{
        const {ID} = req.query
        const locations = await location.find({"_id" : ID})
        console.log(locations)
        console.log("This is params " , ID )
        res.json(locations)
        // console.log(locations)
        // console.log("Sucess")
    }catch(err){
        res.send("Error : ", err ) 
    }
})

router.post('/update' , async function(req, res){
    try{
        const {ID , SEATS} = req.query 
        const locations = await location.updateMany({_id: ID}, {$set:{"availability":SEATS}})
        console.log("Sucess") 
        res.send("Done") 
    }
    catch(err) {
        res.send("Error ! ")
    }
}) 
module.exports = router 