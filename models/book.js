import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    text: {
      type: String,
      required: true
    },
    author: { type: Schema.Types.ObjectId, ref: 'Profile' }
  },
  { timestamps: true }
)

const bookSchema = new Schema(
  {
    title: {
      type: String
    },
    genre: {
      type: String
    },
    rating: {
      type: Number,
      enum: [1,2,3,4,5]
    },
    author: {
      type: String
    },
    comments: [commentSchema]
  },
  { timestamps: true }
)

const Book = mongoose.model('Book', bookSchema)

export { Book }