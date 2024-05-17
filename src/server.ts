import * as dotenv from "dotenv";
import application from "./app";

dotenv.config();

const app = new application();

console.log(process.env.APP_PORT);

app.run(Number(process.env.APP_PORT));
