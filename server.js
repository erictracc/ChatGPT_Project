const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

const port = 7548;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
