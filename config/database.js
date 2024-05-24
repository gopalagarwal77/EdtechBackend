const mongoose = require('mongoose');
require("dotenv").config();

exports.connect = ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>console.log('Db connected successfully'))
    .catch( (error)=>{
        console.log('Error connecting to Mongo');
        console.error(error);
        process.exit(1);
    })
};