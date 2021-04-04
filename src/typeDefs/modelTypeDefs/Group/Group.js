import { gql } from 'apollo-server-express';

export const GroupTypeDef = gql`
	extend type Query {
		groups(userId: ID!): [Group]
		defaultGroup(userId: ID!): Group
	}
	extend type Mutation {
		createGroup(input: GroupInput!): Group!
	}
`;
