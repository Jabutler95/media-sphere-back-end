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

const postSchema = new Schema(
  {
    text: {
      type: String,
      required: true
    },
    image: {
      type: String,
    },
    author: { type: Schema.Types.ObjectId, ref: 'Profile' },
    comments: [commentSchema],
  },
  { timestamps: true }
)

const Performer = mongoose.model('Performer', postSchema)

export { Performer }