import dotenv from "dotenv";
import { cleanEnv, num, port, str, url } from "envalid";

dotenv.config();

const env = cleanEnv(process.env, {
	CLOUDINARY_CLOUD_NAME: str(),
	CLOUDINARY_API_KEY: str(),
	CLOUDINARY_API_SECRET: str(),

	TOKEN_KEY: str(),
	TOKEN_KEY_EXPIRY: num(),

	REFRESH_SECRET: str(),
	REFRESH_EXPIRY: num(),

	PORT: port(),
	CLIENT_URL: str(),
	MONGODB_URI: url(),
	NODE_ENV: str({ choices: ["development", "production"] }),
});

export default env;
