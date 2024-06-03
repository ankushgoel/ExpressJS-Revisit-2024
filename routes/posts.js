import express from 'express';
const router = express.Router();

// For using express as a backend
const posts = [
    { id: 1, title: "Post 1"},
    {id: 2, title: "Post 2"},
    {id: 3, title: "Post 3"}
]

router.get('/', (req, res) => {
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

// module.exports = router;
export default router;