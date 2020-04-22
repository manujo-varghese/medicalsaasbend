const express=require('express');
const bodyParser=require('body-parser');
const cors= require('cors');

const { createProxyMiddleware } = require('http-proxy-middleware');
 


var url='mongodb://localhost:27017/medicalsaas'
var researcherController=require('./controllers/researcherController');
const{ mongoose}=require('./db.js');
var app=express();
 

app.use(bodyParser.json());
app.use(cors({orgin:'http://localhost:4200'}));
app.listen(3000,()=>console.log('Server started at 3000 '))
app.use('/researcher',researcherController)