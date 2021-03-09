import { Schema, model } from 'mongoose';

const AuthDetailSchema = new Schema({
	passwords: [
		{
			createdOn: Date,
			password: {
				type: String,
				required: true,
			},
			isCurrent: Boolean,
		},
	],
});

export const AuthDetail = model('AuthDetail', AuthDetailSchema);
