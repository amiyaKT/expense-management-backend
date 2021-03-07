import { gql } from 'apollo-server-express';
import { CatTypeDef } from './Cat/Cat';
import { HealthTypeDef } from './Health';
import { UserTypeDef } from './User/User';
import { UserAuthDetailTypeDef } from './UserAuthDetail/UserAuthDetail';

const RootTypeDef = gql`
	type Query {
		root: String
	}
	type Mutation {
		root: String
	}
`;

export const TypeDefs = [
	RootTypeDef,
	HealthTypeDef,
	CatTypeDef,
	UserTypeDef,
	UserAuthDetailTypeDef,
];
