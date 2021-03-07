import { Schema, model } from 'mongoose';

const UserAuthDetailSchema = new Schema({
	userId: { type: Schema.Types.ObjectId, ref: 'User' },
	password: {
		type: String,
		required: true,
	},
});

export const UserAuthDetail = model('AuthDetail', UserAuthDetailSchema);
