import express from 'express';
import { getPost, getPosts, newPost, updatePost, deletePost } from '../controllers/postController.js';
const router = express.Router();

router.get('/', getPosts)

router.get('/:id', getPost)

// Create new post
router.post('/', newPost)

// Update post
router.put('/:id', updatePost)

// Delete post
router.delete('/:id', deletePost)

// module.exports = router;
export default router;