import { gql } from 'apollo-server-core';

export const PasswordType = gql`
	type Password {
		password: String!
		createdOn: Date!
		isCurrent: Boolean!
	}
`;
