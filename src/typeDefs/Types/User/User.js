import { gql } from 'apollo-server-core';

export const UserType = gql`
	type User {
		id: ID!
		name: String!
		email: String!
		authDetail: AuthDetail
	}
`;
