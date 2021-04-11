import { gql } from 'apollo-server-core';

export const GroupInput = gql`
	input GroupInput {
		name: String!
		createdBy: ID!
		isDefault: Boolean
		admins: [ID!]
		members: [ID!]
	}
`;
