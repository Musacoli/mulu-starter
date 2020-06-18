import mongoose from 'mongoose'

const chatRoomSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			unique: true,
			required: true,
		},
		videoUrl: {
			type: String
		}
	}
);

const ChatRoom = mongoose.model('ChatRoom', chatRoomSchema);

export default ChatRoom;

