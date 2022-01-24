import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
     title: String,
     description: String,
     type: String,
     selected_image: String,
     createdAt: {
          type: Date,
          default: new Date()
     }
})

var PostMessage = mongoose.model('News', postSchema)

export default PostMessage