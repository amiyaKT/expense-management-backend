import { hash } from 'bcrypt';

import { CONSTANTS } from '../constants';

import { AuthDetail } from '../models/AuthDetail';

export const createNewPassword = async (password) => {
	const { saltRounds, passwordSecret } = CONSTANTS.AUTHENTICATION;
	try {
		const hashedPassword = await hash(password, saltRounds);
		const hashedPasswordSecret = await hash(passwordSecret, saltRounds);
		const newAuthDetail = new AuthDetail({
			passwords: [
				{
					isCurrent: true,
					password: `${hashedPasswordSecret}.${hashedPassword}`,
				},
			],
		});
		return newAuthDetail.save();
	} catch (error) {
		throw error;
	}
};

export const resetPassword = async (userId, password) => {
	const saltRounds = CONSTANTS.AUTHENTICATION.saltRounds;
	try {
		const hashedPassword = await hash(password, saltRounds);
		const hashedUserId = await hash(userId, saltRounds);
		const newAuthDetail = new AuthDetail({
			userId,
			password: `${hashedUserId}.${hashedPassword}`,
		});
		const passwords = await AuthDetail.find();
		return newAuthDetail.save();
	} catch (error) {
		throw error;
	}
};
