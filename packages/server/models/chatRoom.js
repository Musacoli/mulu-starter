import mongoose from 'mongoose'

const chatRoomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    videoUrl: {
      type: String,
    },
    host: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
  },
  { timestamps: true },
)

const ChatRoom = mongoose.model('ChatRoom', chatRoomSchema)

export default ChatRoom
