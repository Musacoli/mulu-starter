import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true },
)

userSchema.pre('remove', (next) => {
  this.model('Message').deleteMany({ user: this._id }, next)
})

const User = mongoose.model('User', userSchema)

export default User
