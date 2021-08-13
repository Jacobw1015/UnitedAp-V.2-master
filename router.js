const express = require('express');
const router= express.Router();
const path = require('path');


const {writeData,getData,getHeaders}=require('./public/js/index')
const {Applicant} = require('./public/js/appData')
const {objToArray} = require('./public/js/object');
const { get } = require('http');
const { getHeapSpaceStatistics } = require('v8');

// Javascript files
router.get('/javascript',(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/js/script.js'));
});
router.get('/javascript1',(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/js/tictac.js'));
});
router.get('/javascript2',(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/js/index.js'));
});
router.get('/javascript3',(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/js/data.js'));
});


// CSS files
router.get('/css1',(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/css/United.css'))
});
router.get('/css2',(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/css/newhire.css'))
});

// Homepage
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/html/UnitedApex.html'));
});


// EJS file
router.get('/newhire',(req,res)=>{
    res.render('NewHire.ejs');
});
router.post('/newhire',(req,res,next)=>{
   
    let { first, last,coffee,monday,avail,email,phone,ref1,ref2,ref3} = req.body;
    let apper = new Applicant(first,last);
    let refArray = [ref1,ref2,ref3];
    
   apper.setCoffee = coffee; 	
    apper.setEmail=email;
    apper.setAvail=avail;
    apper.setMondays=monday || "Yes"; 
    apper.setPhone=phone;
    apper.changeReference(refArray);
  

    writeData(objToArray(apper));
   
    res.render('NewHire.ejs');
    
});

//For App Data
const displayHeaders=async ()=>{
    let headers=await getHeaders();
    return headers.data.values[0];
};
const getApp= async ()=>{
    let data = await getData();
    return data.data.values;
};
router.get('/data', async (req,res)=>{
   
    res.render("index.ejs",{head: await displayHeaders(),data: await getApp()})
});




module.exports={router};