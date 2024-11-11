const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('../config.json');

// Connect to the database
connectToDatabase(config.mongodb.url).catch(error => console.error(error));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const port = 7548;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


async function connectToDatabase(url) {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}
