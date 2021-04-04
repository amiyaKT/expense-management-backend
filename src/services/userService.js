import { User } from '../models/User';
import { AuthDetail } from '../models/AuthDetail';
import { createNewPassword } from './AuthDetailService';

export const createUser = (user, authId) => {
	const newUser = new User({
		...user,
		authDetailId: authId,
	});
	return newUser.save();
};

export const createUserWithPassword = async ({ password, ...user }) => {
	const session = await AuthDetail.startSession();
	session.startTransaction();

	try {
		const authDetail = await createNewPassword(password);
		const createdUser = await createUser(user, authDetail.id);
		await session.commitTransaction();
		return createdUser;
	} catch (error) {
		await session.abortTransaction();
		throw error;
	} finally {
		session.endSession();
	}
};

export const fetchUserByUserId = (userId) => User.findById(userId);
