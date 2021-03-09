import { gql } from 'apollo-server-express';

export const AuthDetailTypeDef = gql`
	extend type Mutation {
		resetPassword(input: AuthDetailInput!): AuthDetail!
	}
`;
