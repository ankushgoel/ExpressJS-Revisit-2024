const express = require('express');
const path = require('path');
const posts = require('./routes/posts')
const PORT = 8080;
const app = express();

// Manual routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
    // res.send('Hello World!');
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'))
    // res.send('About!');
})

// static server for autoloading public files with extension
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/posts', posts);

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
})