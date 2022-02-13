//require('dotenv').config();
 const mongoose = require('mongoose');
 const config=require('./dbconfig')

 const Connect=  async ()=>{
     try{

        const con = await mongoose.connect(config.MONGO_CONNECTION_URL,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
       


        })

        console.log(`connected at ${con.connection.host}`);
     }
     catch(err){
         console.log('Connection failed ',err);
         process.exit(1)

     }
 }
// const MongoClient = require("mongodb").MongoClient;
// function connectDB() {
//     // Database connection 🥳
//     mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
//     const connection = mongoose.connection;
//     connection.once('open', () => {
//         console.log('Database connected 🥳🥳🥳🥳');
//     }).on(err => {
//         console.log('Connection failed ☹️☹️☹️☹️');
//     });
// }

// // mIAY0a6u1ByJsWWZ

 module.exports = Connect;