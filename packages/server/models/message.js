import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
	{
		message: {
			type: String,
			required: true,
		},
		user: {
		  type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
		chatRoom: {
		  type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'ChatRoom'
    },
	},
	{ timestamps: true },
);

const Message = mongoose.model('Message', messageSchema);

export default Message;
