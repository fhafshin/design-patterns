import * as dotenv from "dotenv";
import application from "./app";
import TwitterMessagePublisher from "./FactoryMethod/example1/MessagePublisher/TwitterMessagePublisher";
import SocialService from "./FactoryMethod/example1/SocialService";

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
