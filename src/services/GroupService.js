import { Group } from '../models/Group';

const createGroup = async (groupInput) => {
	try {
		const newGroup = new Group(groupInput);
		await newGroup.save();
	} catch (error) {
		throw error;
	}
};

const findGroup = async () => {
	try {
	} catch (error) {
		throw error;
	}
};
