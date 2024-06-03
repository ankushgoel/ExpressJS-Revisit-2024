
// For using express as a backend
let posts = [
    { id: 1, title: "Post 1"},
    {id: 2, title: "Post 2"},
    {id: 3, title: "Post 3"}
]

// @desc    Get all posts
// @route   GET /api/posts
export const getPosts = (req, res) => {
    const limit = parseInt(req.query.limit);
    if(!isNaN(limit) && limit > 0) {
        res.json(posts.slice(0, limit))
    } else 
        res.json(posts);
}

// @desc    Get post by ID
// @route   GET /api/posts/:id
export const getPost = (req, res, next) => {
    const postId = parseInt(req.params.id);
    const post = posts.filter((post) => post.id === postId)
    // console.log(post); // filter - [], find - undefined
    if(!post || post.length < 1) {
        const error = new Error(`Post could not be found!`)
        error.status = 404;
        return next(error)
    } else 
        res.json(post);
}

// @desc    Create a new post
// @route   POST /api/posts/:id
export const newPost = (req, res, next) => {
    // console.log(req.body);
    if(req.body?.title) {
        const newPost = {
            id: posts.length+1,
            title: req.body.title
        }
        posts.push(newPost)
        res.status(201).json(newPost);
    } else {
        const error = new Error(`Appropriate data not received for post request!`)
        error.status = 400;
        return next(error)
        // res.status(400).json({message: `Appropriate data not received for post request!`});
    }  
}

// @desc    Update a post
// @route   PUT /api/posts/:id
export const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if(!post) {
        const error = new Error(`Post could not be found!`)
        error.status = 400;
        return next(error)
    }
    post.title = req.body.title
    res.status(200).json(post);
}

// @desc    Delete a post
// @route   DELETE /api/posts/:id
export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
    if(!post) {
        const error = new Error(`Post could not be found!`)
        error.status = 400;
        return next(error)
    }
    posts = posts.filter((post) => post.id !== id)
    res.status(200).json(posts);
}