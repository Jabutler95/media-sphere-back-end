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

const movieSchema = new Schema(
  {
    title: {
      type: String
    },
    genre: {
      type: String
    },
    rating: {
      enum: ['1','2','3','4','5']
    },
    director: {
      type: String
    },
    performers: { type: Schema.Types.ObjectId, ref: 'Performer'},
    comments: [commentSchema]
  },
  { timestamps: true }
)

const Movie = mongoose.model('Movie', movieSchema)

export { Movie }