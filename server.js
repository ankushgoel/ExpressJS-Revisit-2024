const express = require('express');
const path = require('path');
const PORT = 8080;
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
    // res.send('Hello World!');
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'))
    // res.send('About!');
})


app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
})