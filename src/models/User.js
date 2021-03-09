import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	authDetail: {
		type: Schema.Types.ObjectId,
		ref: 'AuthDetail',
	},
});

export const User = model('User', UserSchema);
