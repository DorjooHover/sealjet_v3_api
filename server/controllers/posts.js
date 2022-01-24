import express from "express";
import mongoose from 'mongoose'

import PostMessage from '../models/postMessage.js'

const router = express.Router()

export const getNews = async (req, res) => {
     try {
          const newsMessages = await PostMessage.find()

          res.status(200).json({ newsMessages })
     } catch (error) {
          res.status(404).json({ message: error.message })
     }
}
export const createNews = async (req, res) => {
     const { title, description, type, selected_image } = req.body

     const newNews = new PostMessage({ title, description, type, selected_image })
     try {
          await newNews.save()

          res.status(201).json({ newNews })
     } catch (error) {
          res.status(404).json({ message: error.message })
     }
}

export const deleteNews = async (req, res) => {
     const { id } = req.params
     console.log('delete')

     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

     await PostMessage.findByIdAndRemove(id)

     res.json({ message: "Post deleted successfully." })
}