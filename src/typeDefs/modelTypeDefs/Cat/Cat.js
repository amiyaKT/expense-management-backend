import { gql } from 'apollo-server-express';

export const CatTypeDef = gql`
	extend type Query {
		cats: [Cat!]
	}
	extend type Mutation {
		createCat(name: String!): Cat!
	}
`;
