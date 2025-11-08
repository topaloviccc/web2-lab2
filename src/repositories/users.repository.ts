import db from "../config/db.config.js";

export async function getAllUsers() {
	const result = await db.query("SELECT * FROM users;");
	return result.rows;
}

export async function storeUser(
	first_name: string,
	last_name: string,
	username: string,
	password: string
) {
	const user = await db.query(
		`INSERT INTO users (first_name, last_name, username, password) VALUES ($1, $2, $3, $4) RETURNING id`,
		[first_name, last_name, username, password]
	);
	return user.rows[0].id;
}
