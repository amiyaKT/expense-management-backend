import { Group } from '../models/Group';

export const createGroup = async (groupInput) => {
	try {
		const newGroup = new Group(groupInput);
		await newGroup.save();
	} catch (error) {
		throw error;
	}
};

export const findGroups = async (userId, isDefault = true) => {
	try {
		const group = await Group.find()
			.where('isDefault', isDefault)
			.where('createdBy', userId)
			.populate('admins')
			.populate('members')
			.exec();
		return group;
	} catch (error) {
		throw error;
	}
};

export const getDefaultGroup = async (userId) => {
	try {
		return await Group.findOne({
			createdBy: userId,
			isDefault: true,
		})
			.populate('admins')
			.populate('members')
			.exec();
	} catch (error) {
		throw error;
	}
};
