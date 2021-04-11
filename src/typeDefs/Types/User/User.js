import { gql } from 'apollo-server-core';

export const UserType = gql`
	type User {
		id: ID!
		name: String!
		email: String!
		registeredOn: Date!
		authDetailId: ID
		authDetail: AuthDetail
		defaultGroup: Group
		groups: [Group]
	}
`;
