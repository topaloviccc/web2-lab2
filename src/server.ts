import express from "express";
import path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import indexRouter from "./routes/index.routes";
import commentsRouter from "./routes/comments.routes";
import usersRouter from "./routes/users.routes";
import { externalUrl, port } from "./config/config";

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/", commentsRouter);
app.use("/", usersRouter);

if (externalUrl) {
	const hostname = "0.0.0.0"; //ne 127.0.0.1
	app.listen(port, hostname, () => {
		console.log(`Server locally running at http://${hostname}:${port}/ and from
		outside on ${externalUrl}`);
	});
} else {
	app.listen(port, function () {
		console.log(`Server running at https://localhost:${port}/`);
	});
}
