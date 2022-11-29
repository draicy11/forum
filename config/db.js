// This is for MongoDb connection

const mongoose = require('mongoose');
const config = require('config');
const db = "mongodb+srv://draicy:poiuy@keeper-data.wqyru.mongodb.net/devconnector";

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser:true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('MongoDB Connected...')
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;