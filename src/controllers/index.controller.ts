import { Request, Response } from "express";
import { getComments } from "../service/comments.service";
import { getUsers } from "../service/users.service";

export async function listCommentsAndUsers(req: Request, res: Response) {
	try {
		const resultComments = await getComments();
		const comments = Array.isArray(resultComments) ? resultComments : [];
		const resultUsers = await getUsers();
		const users = Array.isArray(resultUsers) ? resultUsers : [];
		res.render("index", { comments, users });
	} catch (err) {
		console.error(err);
		res.sendStatus(500);
	}
}
