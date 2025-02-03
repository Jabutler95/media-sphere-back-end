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

const gameSchema = new Schema(
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
    studio: {
      type: String
    },
    category: {
      type: String,
      enum: ['Video Game', 'Board Game', 'Card Game', 'Other']
    },
    comments: [commentSchema]
  },
  { timestamps: true }
)

const Game = mongoose.model('Game', gameSchema)

export { Game }