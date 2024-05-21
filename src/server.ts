import * as dotenv from "dotenv";
import application from "./app";
import Auth from "./solid/DIP/Auth/Auth";
import MySqlConnection from "./solid/DIP/Auth/MySqlConnection";
import MySqlUserProvider from "./solid/DIP/Auth/MySqlUserProvider";
import Main from "./solid/OCP/main";
import SocialService from "./FactoryMethod/Publisher/SocialService";
import MessagePublisher from "./FactoryMethod/Publisher/MessagePublisher";
import TwitterMessagePublisher from "./FactoryMethod/MessagePublisher/TwitterMessagePublisher";

dotenv.config();

const app = new application();

console.log(process.env.APP_PORT);

app.run(Number(process.env.APP_PORT));

const messagePublisher = new TwitterMessagePublisher();

const socialService = new SocialService(messagePublisher);

socialService.publish({
  tittle: "titlle",
  image: "image",
  content: "content",
});
