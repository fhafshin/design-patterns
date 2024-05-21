import * as dotenv from "dotenv";
import application from "./app";
import Auth from "./solid/DIP/Auth/Auth";
import MySqlConnection from "./solid/DIP/Auth/MySqlConnection";
import MySqlUserProvider from "./solid/DIP/Auth/MySqlUserProvider";
import Main from "./solid/OCP/main";

dotenv.config();

const app = new application();

console.log(process.env.APP_PORT);

app.run(Number(process.env.APP_PORT));

const main = new Main();
