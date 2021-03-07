import { HealthResolver } from './Health';

import { CatResolver } from './Cat/Cat';
import { UserResolver } from './User/User';
import { UserAuthResolver } from './UserAuthDetail/UserAuthDetail';

export const Resolvers = [
	HealthResolver,
	CatResolver,
	UserResolver,
	UserAuthResolver,
];
