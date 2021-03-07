import { addPassword, fetchAuthDetail } from '../../services/userAuthService';

export const UserAuthResolver = {
	Query: {
		userAuthDetail: (_, { userId }) => fetchAuthDetail(userId),
	},
	Mutation: {
		setUserAuthDetail: (_, { input }) =>
			addPassword(input.userId, input.password),
	},
};
