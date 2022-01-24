import express from "express";

import { getNews, createNews, deleteNews } from '../controllers/posts.js'

const router = express.Router()

router.get('/news', getNews)
router.post('/news', createNews)
router.delete('/news/:id', deleteNews)

export default router