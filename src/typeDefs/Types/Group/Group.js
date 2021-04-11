import { gql } from 'apollo-server-core';

export const GroupType = gql`
	type Group {
		id: ID!
		name: String!
		createdBy: ID!
		isDefault: Boolean
		admins: [User]
		members: [User]
	}
`;
