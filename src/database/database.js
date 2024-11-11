const mongoose = require('mongoose');
const config = require('../../config.json');

const connectToDatabase = async () => {
    try {
        await mongoose.connect(config.mongodb.url);
        console.log('Successfully connected to MongoDB!');
    } catch (error) {
        console.error('An error has occurred while connecting to MongoDB: ' + error);
        process.exit(1);
    }
};

module.exports = connectToDatabase;