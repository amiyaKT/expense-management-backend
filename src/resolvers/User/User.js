import { getAuthDetailByUserId } from '../../services/AuthDetailService';
import {
	createUser,
	createUserWithPassword,
	fetchUserByUserId,
} from '../../services/UserService';

export const UserResolver = {
	Query: {
		user: (_, { userId }) => fetchUserByUserId(userId),
	},
	Mutation: {
		createUser: (_, { input }) => createUser(input),
		createUserWithPassword: (_, { input }) => createUserWithPassword(input),
	},
	User: {
		authDetail: ({ authDetailId }) => {
			return getAuthDetailByUserId(authDetailId);
		},
	},
};
