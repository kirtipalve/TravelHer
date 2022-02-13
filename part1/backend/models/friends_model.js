const mongoose= require('mongoose')
//const Joi = require("@hapi/joi");
const Schema = mongoose.Schema;

var friendSchema = new mongoose.Schema({
    fullName:{
        type:String
    },
    fromPlace:{
        type:String
    },

    modeOfTransport:{
        type:String
    },

    toPlace:{
        type:String
    },
    fromDate:{
        type:String
    },
    toDate :{
        type:String
    },
    
},
{
    timestamps:true
});

// const schema = Joi.object({
//     fullName: Joi.string(),
//     fromPlace: Joi.string(),
//     toPlace: Joi.string(),
//     modeOfTransport: Joi.string(),
//     fromDate: Joi.date(),
//     toDate: Joi.date(),
//   });
// friendSchema.methods.joiValidation = function (taskObject) {
//     schema.required();
//     return schema.validate(taskObject);
//   };

const Friend=mongoose.model('Friends',friendSchema);
module.exports=Friend;
