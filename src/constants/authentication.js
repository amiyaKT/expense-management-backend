export const AUTHENTICATION = {
	saltRounds: parseInt(process.env.SALT_ROUNDS),
	passwordSecret: process.env.PASSWORD_SECRET,
};
