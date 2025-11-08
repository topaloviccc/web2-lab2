import { Request, Response } from "express";
import { addComment, deleteComments } from "../service/comments.service";

export async function addNewComment(req: Request, res: Response) {
	try {
		const author = req.body.author || "anonymous";
		const body = req.body.comment;
		const xssEnabled = req.body.xssEnabled === "on";
		await addComment(author, body, xssEnabled);
		res.redirect("/");
	} catch (err) {
		console.error(err);
		res.sendStatus(500);
	}
}

export async function clearComments(req: Request, res: Response) {
	try {
		await deleteComments();
		res.redirect("/");
	} catch (err) {
		console.error(err);
		res.sendStatus(500);
	}
}

// export async function listComments(req: Request, res: Response) {
// 	try {
// 		const result = await getComments();
// 		const comments = Array.isArray(result) ? result : [];
// 		res.render("index", { comments });
// 	} catch (err) {
// 		console.error(err);
// 		res.sendStatus(500);
// 	}
// }
