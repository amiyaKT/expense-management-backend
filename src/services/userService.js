import { User } from '../models/User';
import { addPassword, fetchAuthDetail } from './userAuthService';

export const createUser = (user) => {
	const newUser = new User(user);
	return newUser.save();
};

export const createUserWithPassword = async (user, password) => {
	const session = await User.startSession();
	session.startTransaction();

	try {
		const newUser = await createUser(user);
		await addPassword(newUser.id, password);
		await session.commitTransaction();
	} catch (error) {
		await session.abortTransaction();
		throw error;
	} finally {
		session.endSession();
	}
};

export const fetchUserByUserId = (userId) => User.findById(userId);

export const fetchUserWithAuthDetail = async (userId) => {
	const user = await fetchUserByUserId(userId);
	const authDetail = await fetchAuthDetail(userId);
	const response = {
		id: user.id,
		...user.toObject(),
		authDetail,
	};
	return response;
};
