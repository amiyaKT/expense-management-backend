import { getAuthDetail, resetPassword } from '../../services/AuthDetailService';

export const AuthDetailResolver = {
	Query: {
		authDetail: (_, { userId }) => {
			return getAuthDetail(userId);
		},
	},
	Mutation: {
		resetPassword: (_, { input }) =>
			resetPassword(input.userId, input.password),
	},
};
