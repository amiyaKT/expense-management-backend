import { createGroup, findGroups } from '../../services/GroupService';

export const GroupResolver = {
	Query: {
		groups: (_, { userId }) => findGroups(userId),
		defaultGroup: (_, { userId }) => findGroups(userId, true),
	},
	Mutation: {
		createGroup: (_, { input }) => createGroup(input),
	},
};
