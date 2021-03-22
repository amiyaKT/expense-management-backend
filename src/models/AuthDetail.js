import { Schema, model } from 'mongoose';

const AuthDetailSchema = new Schema({
	passwords: [
		{
			createdOn: {
				type: Date,
				default: Date.now,
			},
			password: {
				type: String,
				required: true,
			},
			isCurrent: Boolean,
		},
	],
});

export const AuthDetail = model('AuthDetail', AuthDetailSchema);
