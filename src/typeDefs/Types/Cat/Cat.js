import { gql } from 'apollo-server-core';

export const CatType = gql`
	type Cat {
		id: ID!
		name: String!
	}
`;
