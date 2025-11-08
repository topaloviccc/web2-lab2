import * as repository from "../repositories/comments.repository";

// prema htmlspecialchars() funkciji, moja funkcija sanitiziranja (https://www.w3schools.com/php/func_string_htmlspecialchars.asp#gsc.tab=0)
function sanitizeInput(input: string) {
	return input
		.replace(/&/g, "&amp")
		.replace(/"/g, "&quot")
		.replace(/'/g, "&#039")
		.replace(/</g, "&lt")
		.replace(/>/g, "&gt");
}

export async function addComment(
	author: string,
	body: string,
	xssEnabled: boolean
) {
	const commentToStore = xssEnabled ? body : sanitizeInput(body);
	return repository.storeComment(author, commentToStore);
}

export async function getComments() {
	return repository.getAllComments();
}

export async function deleteComments() {
	return repository.deleteAllComments();
}
