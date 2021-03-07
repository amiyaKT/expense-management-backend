import { gql } from 'apollo-server-express';

export const UserTypeDef = gql`
	input UserInput {
		name: String!
		email: String!
	}
	input UserWithPasswordInput {
		user: UserInput!
		password: String!
	}
	type User {
		id: ID!
		name: String!
		email: String!
		authDetail: UserAuthDetail
	}
	extend type Query {
		user(userId: String!): User
		userWithAuthDetail(userId: String!): User
	}
	extend type Mutation {
		createUser(input: UserInput!): User!
		createUserWithPassword(input: UserWithPasswordInput!): User!
	}
`;
