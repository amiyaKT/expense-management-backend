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
		if (isDefault) {
			return await Group.findOne({
				isDefault,
			});
		} else {
			return await Group.where('userId').equals(userId);
		}
	} catch (error) {
		throw error;
	}
};
