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
	authDetailId: {
		type: Schema.Types.ObjectId,
		ref: 'AuthDetail',
	},
	registeredOn: {
		type: Schema.Types.Date,
		default: Date.now,
	},
});

export const User = model('User', UserSchema);
