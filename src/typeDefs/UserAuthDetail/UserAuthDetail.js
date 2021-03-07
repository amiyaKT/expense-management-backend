import { gql } from 'apollo-server-express';

export const UserAuthDetailTypeDef = gql`
	# union IdOrUser = ID | User
	input UserAuthDetailInput {
		userId: ID!
		password: String!
	}
	type UserAuthDetail {
		userId: ID!
		password: String!
	}
	extend type Query {
		userAuthDetail(userId: String!): UserAuthDetail!
	}
	extend type Mutation {
		setUserAuthDetail(input: UserAuthDetailInput!): UserAuthDetail!
	}
`;
