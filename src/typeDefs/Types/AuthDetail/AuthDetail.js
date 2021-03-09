import { gql } from 'apollo-server-core';

export const AuthDetailType = gql`
	type AuthDetail {
		id: ID!
		passwords: [Password]!
	}
`;
