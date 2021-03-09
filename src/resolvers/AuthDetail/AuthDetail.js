import { resetPassword } from '../../services/AuthDetailService';

export const AuthDetailResolver = {
	Mutation: {
		resetPassword: (_, { input }) =>
			resetPassword(input.userId, input.password),
	},
};
