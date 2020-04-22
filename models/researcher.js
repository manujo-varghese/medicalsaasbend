const mongoose=require('mongoose');
var Researcher= mongoose.model('Researcher',{
    name:{type:String},
    position:{type:String},
    intrest:{type:String}
});
module.exports={Researcher};