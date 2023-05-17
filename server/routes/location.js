const express = require('express') 
const router = express.Router() 
const location = require('../models/location')
const data = require('../clubs.json')
const logger = require('../logger') 

router.get("/" , (req,res)=>{
    res.send("Get Request")
})

router.post('/addAll' ,async function(req, res) {
        try{
            // console.log(data[1])
            const locations = await location.insertMany(data.clubs)
            // console.log(locations)
            res.json(locations);
            // logger.log('info',"Success"); //debug level as first param
            // logger.debug("/addAll route");
        }
        catch(err){
            console.log(err)
            // logger.error("Data addition failed")
        }
        
});

router.get('/showall', async function(req, res) {
    try{
        const locations = await location.find({})
        res.json(locations)
        // logger.log('info',"Success"); //debug level as first param
        // logger.debug("/showall route");
    }catch(err){
        // logger.error("Failed")
        res.send("Error : ", err ) 
    }

})
router.get('/getLocation', async function(req, res) {
    try{
        const {ID} = req.query
        const locations = await location.find({"_id" : ID})
        // logger.log('info',"Success"); //debug level as first param
        // logger.debug("/showall route");
        res.json(locations)
        // console.log(locations)
        // console.log("Sucess")
    }catch(err){
        // logger.error("Failed")
        res.send("Error : ", err ) 
    }
})

router.post('/update' , async function(req, res){
    try{
        const {ID , SEATS} = req.query 
        const locations = await location.updateMany({_id: ID}, {$set:{"availability":SEATS}})
        // logger.log("Success"); //debug level as first param
        // logger.debug("/showall route");
        res.send("Done") 
    }
    catch(err) {
        logger.error("Failed")
        res.send("Error ! ")
    }
}) 
module.exports = router 