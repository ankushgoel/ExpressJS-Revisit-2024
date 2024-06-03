import express from 'express';
const router = express.Router();

// For using express as a backend
let posts = [
    { id: 1, title: "Post 1"},
    {id: 2, title: "Post 2"},
    {id: 3, title: "Post 3"}
]

// Logger Middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

router.get('/', logger, (req, res) => {
    const limit = parseInt(req.query.limit);
    if(!isNaN(limit) && limit > 0) {
        res.json(posts.slice(0, limit))
    } else 
        res.json(posts);
})

router.get('/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.filter((post) => post.id === postId)
    // console.log(post); // filter - [], find - undefined
    if(!post || post.length < 1) {
        res.status(404).json({message: `Post could not be found!`})
    } else 
        res.json(post);
})

// Create new post
router.post('/', (req, res) => {
    // console.log(req.body);
    if(req.body?.title) {
        const newPost = {
            id: posts.length+1,
            title: req.body.title
        }
        posts.push(newPost)
        res.status(201).json(newPost);
    } else {
        res.status(400).json({message: `Appropriate data not received for post request!`});
    }  
})

// Create new post
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if(!post) {
        return res.status(400).json({message:`Post not found`});
    }
    post.title = req.body.title
    res.status(200).json(post);
})

// Create new post
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if(!post) {
        return res.status(400).json({message:`Post not found`});
    }
    posts = posts.filter((post) => post.id !== id)
    res.status(200).json(posts);
})

// module.exports = router;
export default router;