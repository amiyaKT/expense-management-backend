import { gql } from 'apollo-server-express';

export const GroupTypeDef = gql`
	extend type Query { 
	}
	extend type Mutation {
		createGroup(input: GroupInput!): Group!
	}
`;
