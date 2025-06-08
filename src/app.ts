import cors from "cors";
import express, { Express, Request, Response } from "express";
import env from "./utils/env";

const app: Express = express();

const PORT = env.PORT || 8000;

// CORS Configuration
app.use(
	cors({
		origin: env.CLIENT_URL,
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	})
);

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
	res.status(200).json("Server is up & running");
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
