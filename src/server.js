const config = require('../config');
const app = require('./app');
const connectToDatabase = require('./database/database');

// Conenct to the database
connectToDatabase();

const port = config.web.port;
app.listen(port, () => {
    console.log(`Server running on https://itec4220.itzflip.ca`);
});
