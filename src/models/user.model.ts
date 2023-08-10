/* eslint-disable @typescript-eslint/comma-dangle */
import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  id: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: String,
  bio: String,
  threads: [{ type: Schema.Types.ObjectId, ref: 'Thread' }],
  onboarded: { type: Boolean, default: false },
  communities: [{ type: Schema.Types.ObjectId, ref: 'Community' }],
})

const User = model('User', userSchema)

export default User
