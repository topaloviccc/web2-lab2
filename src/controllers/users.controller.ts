import { Request, Response } from "express";
import { addUser } from "../service/users.service";

export async function addNewUser(req: Request, res: Response) {
	try {
		const first_name = req.body.first_name;
		const last_name = req.body.last_name;
		const username = req.body.username;
		const password = req.body.password;
		const sdeEnabled = req.body.sdeEnabled === "on";
		await addUser(first_name, last_name, username, password, sdeEnabled);
		res.redirect("/");
	} catch (err) {
		console.error(err);
		res.sendStatus(500);
	}
}

// export async function listUsers(req: Request, res: Response) {
// 	try {
// 		const result = await getUsers();
// 		const users = Array.isArray(result) ? result : [];
// 		res.render("index", { users });
// 	} catch (err) {
// 		console.error(err);
// 		res.sendStatus(500);
// 	}
// }
