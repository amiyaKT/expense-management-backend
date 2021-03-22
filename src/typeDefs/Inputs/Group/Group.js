import { gql } from 'apollo-server-core';

export const GroupInput = gql`
	input GroupInput {
		name: String!
		createdBy: ID!
		isDefaultGroup: Boolean
		admins: [ID!]
		members: [ID!]
	}
`;
