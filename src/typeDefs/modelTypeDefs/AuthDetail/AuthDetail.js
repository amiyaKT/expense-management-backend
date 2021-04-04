import { gql } from 'apollo-server-express';

export const AuthDetailTypeDef = gql`
	extend type Query {
		authDetail(input: ID): String
	}
	extend type Mutation {
		resetPassword(input: AuthDetailInput!): AuthDetail!
	}
`;
