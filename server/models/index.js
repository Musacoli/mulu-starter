import mongoose from 'mongoose';

import User from './user';
import Message from './message';
import ChatRoom from './chatRoom';

const dbConnect = () => {
	mongoose.set('useCreateIndex', true)
	return mongoose.connect(process.env.MULU_DATABASE_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
};

export { dbConnect };

export default {
  ChatRoom,
  Message,
  User
};
