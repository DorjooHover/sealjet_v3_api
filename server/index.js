import express from "express";
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'

import postRouter from './routes/posts.js'

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/posts', postRouter)

const CONNECTION_URL = 'mongodb+srv://dorjoo:dorjooX0@cluster0.lg7cc.mongodb.net/sealjet_demo?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => app.listen(PORT, () => console.log(`Listening on ${PORT}`))).catch((error) => console.log(`${error}`))

// mongoose.set('useFindAndModify', false)