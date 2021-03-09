import {
	createUser,
	createUserWithPassword,
	fetchUserByUserId,
	fetchUserWithAuthDetail,
} from '../../services/UserService';

export const UserResolver = {
	Query: {
		user: (_, { userId }) => fetchUserByUserId(userId),
		userWithAuthDetail: (_, { userId }) => fetchUserWithAuthDetail(userId),
	},
	Mutation: {
		createUser: (_, { input }) => createUser(input),
		createUserWithPassword: (_, { input }) => createUserWithPassword(input),
	},
};
