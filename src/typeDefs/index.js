import { gql } from 'apollo-server-express';

import { HealthTypeDef } from './Health';

import { ScalarTypeDefs } from './Scalars/Scalar';

import { ApplicationTypes } from './Types/Types';
import { ApplicationInputs } from './Inputs/Inputs';
import { ApplicationTypeDefs } from './modelTypeDefs/modelTypeDefs';

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
	ScalarTypeDefs,
	HealthTypeDef,
	...ApplicationInputs,
	...ApplicationTypes,
	...ApplicationTypeDefs,
];
