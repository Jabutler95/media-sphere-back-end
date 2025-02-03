import mongoose from 'mongoose'

const Schema = mongoose.Schema

const shelfSchema = new Schema(
  {
    books: [{ type: Schema.Types.ObjectId, ref: 'Book'}],
    shows: [{ type: Schema.Types.ObjectId, ref: 'Show'}],
    games: [{ type: Schema.Types.ObjectId, ref: 'Game'}],
    movies: [{ type: Schema.Types.ObjectId, ref: 'Movie'}],
    owner: { type: Schema.Types.ObjectId, ref: 'Profile'},
  },
  { timestamps: true }
)

const Shelf = mongoose.model('Shelf', shelfSchema)

export { Shelf }