import mongoose from 'mongoose'

const Schema = mongoose.Schema

// const commentSchema = new Schema(
//   {
//     text: {
//       type: String,
//       required: true
//     },
//     author: { type: Schema.Types.ObjectId, ref: 'Profile' }
//   },
//   { timestamps: true }
// )

const performerSchema = new Schema(
  {
    name: {
      type: String
    },
    age: {
      type: Number 
    },
    gender: {
      type: String
    }
  },
  { timestamps: true }
)

const Performer = mongoose.model('Performer', performerSchema)

export { Performer }