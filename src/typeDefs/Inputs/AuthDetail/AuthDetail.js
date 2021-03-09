import { gql } from 'apollo-server-core';

export const AuthDetailInput = gql`
	input AuthDetailInput {
		password: String!
	}
`;
