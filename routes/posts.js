import express from 'express';
import {getPosts, getSinglePostById, createPost } from '../controllers/postControllers.js'
const router = express.Router();

router.get('/:id', getSinglePostById)

router.get('/', getPosts)

router.post('/', createPost)

export default router;