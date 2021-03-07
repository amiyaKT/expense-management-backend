import { hash } from 'bcrypt';

import { CONSTANTS } from '../constants';

import { UserAuthDetail } from '../models/UserAuthDetail';

export const addPassword = async (userId, password) => {
	const saltRounds = CONSTANTS.AUTHENTICATION.saltRounds;
	try {
		const hashedPassword = await hash(password, saltRounds);
		const hashedUserId = await hash(userId, saltRounds);
		const newAuthDetail = new UserAuthDetail({
			userId,
			password: `${hashedUserId}.${hashedPassword}`,
		});
		return newAuthDetail.save();
	} catch (error) {
		throw error;
	}
};

export const fetchAuthDetail = (userId) => UserAuthDetail.findOne({ userId });
