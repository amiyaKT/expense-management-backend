import { gql } from 'apollo-server-core';

export const UserInput = gql`
	input UserInput {
		name: String!
		email: String!
		password: String
	}
`;
