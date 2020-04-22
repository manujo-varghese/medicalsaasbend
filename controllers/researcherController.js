const express=require('express');
var router=express.Router();
var momgo=require('mongodb');
var assert=require('assert');
var { Researcher } = require('../models/researcher');
var ObjectId = require('mongoose').Types.ObjectId;

//localhost:3000/researcher/
router.get('/',(req,res)=>{
    Researcher.find((err,docs)=>{
        if(!err){res.send(docs); }
        else{
            console.log("Some Error Ocuured :"+ JSON.stringify(err,undefined,2));
        }
    });
});
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Researcher.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Researcher :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/insert' ,(req, res) => {
    var resr = new Researcher({
        name: req.body.name,
        position: req.body.position,
        intrest: req.body.intrest
       
    });
    resr.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Researcher Save :' + JSON.stringify(err, undefined, 2)); }
    });
});
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var resr = {
        name: req.body.name,
        position: req.body.position,
        intrest: req.body.intrest,
    };
    Researcher.findByIdAndUpdate(req.params.id, { $set: resr }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in reasearch Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Researcher.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Research Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports=router;