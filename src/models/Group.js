import { Schema, model } from 'mongoose';

const GroupSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	created_by: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	isDefault: {
		type: Boolean,
		default: false,
	},
});

export const Group = model('Group', GroupSchema);
