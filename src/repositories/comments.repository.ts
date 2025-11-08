import db from "../config/db.config.js";

export async function getAllComments() {
	const result = await db.query("SELECT * FROM comments;");
	return result.rows;
}

export async function deleteAllComments() {
	const result = await db.query("DELETE FROM comments;");
	return result.rows;
}

export async function storeComment(author: string, body: string) {
	const comment = await db.query(
		`INSERT INTO comments (author, body) VALUES ($1, $2) RETURNING id`,
		[author, body]
	);
	return comment.rows[0].id;
}
