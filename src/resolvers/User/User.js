import { getAuthDetailByUserId } from '../../services/AuthDetailService';
import { findGroups, getDefaultGroup } from '../../services/GroupService';
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
		defaultGroup: ({ id }) => {
			return getDefaultGroup(id);
		},
		groups: ({ id }) => {
			return findGroups(id, false);
		},
	},
};
