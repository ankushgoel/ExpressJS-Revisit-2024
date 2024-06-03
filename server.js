import express from 'express';
import url from 'url';
import path from 'path';
import posts from './routes/posts.js'

const PORT = 8080;
const app = express();

const __filename = url.fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

// Body Parser Middleware
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({extended: false}));

// Manual routes
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
//     // res.send('Hello World!');
// })

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'))
//     // res.send('About!');
// })

// static server for autoloading public files with extension
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/posts', posts);

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
})