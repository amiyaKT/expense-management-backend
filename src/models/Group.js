import { Schema, model } from 'mongoose';

const GroupSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	createdBy: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	isDefault: {
		type: Boolean,
		default: false,
	},
	admins: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	members: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
});

export const Group = model('Group', GroupSchema);
