import { HealthResolver } from './Health';

import { Scalars } from './Scalars/Scalars';

import { CatResolver } from './Cat/Cat';
import { UserResolver } from './User/User';
import { AuthDetailResolver } from './AuthDetail/AuthDetail';

export const Resolvers = [
	Scalars,
	HealthResolver,
	CatResolver,
	UserResolver,
	AuthDetailResolver,
];
