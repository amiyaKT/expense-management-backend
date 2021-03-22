import { gql } from 'apollo-server-core';

export const GroupType = gql`
	type Group {
		id: ID!
		name: String!
		createBy: ID!
		isDefaultGroup: Boolean
		admins: [ID!]
		members: [ID!]
	}
`;
