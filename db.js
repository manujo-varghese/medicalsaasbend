const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/medicalsaas',(error)=>{
    if(!error)
        console.log(' Mongodb connection is successfull.');
        else
        console.log('Something went wrong Mongodb connection'+JSON.stringify(error,undefined,2));
});
module.exports=mongoose;