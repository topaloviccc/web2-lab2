import * as repository from "../repositories/users.repository";
import bcrypt from "bcryptjs";

// https://www.npmjs.com/package/bcryptjs
// https://www.apriorit.com/dev-blog/security-in-node-js-apps#best-practices
function hashPass(plaintextPass: string) {
	return bcrypt.hashSync(plaintextPass, 10);
}

export async function addUser(
	first_name: string,
	last_name: string,
	username: string,
	password: string,
	sdeEnabled: boolean
) {
	const passwordToStore = sdeEnabled ? password : hashPass(password);
	return repository.storeUser(
		first_name,
		last_name,
		username,
		passwordToStore
	);
}

export async function getUsers() {
	return repository.getAllUsers();
}
