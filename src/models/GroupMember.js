import { model, Schema } from 'mongoose';

const GroupMemberSchema = new Schema({
	groupId: {
		type: Schema.Types.ObjectId,
		ref: 'Group',
	},
	members: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	admins: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
});

const GroupMember = model('GroupMember', GroupMemberSchema);
