import { gql } from 'apollo-server-express';

export const UserTypeDef = gql`
	extend type Query {
		user(userId: String!): User
		userWithAuthDetail(userId: String!): User
	}
	extend type Mutation {
		createUser(input: UserInput!): User!
		createUserWithPassword(input: UserInput!): User!
	}
`;
