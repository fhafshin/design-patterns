import * as dotenv from "dotenv";
import application from "./app";
import SocialService from "./FactoryMethod/example1/Publisher/SocialService";
import TwitterMessagePublisher from "./FactoryMethod/example1/MessagePublisher/TwitterMessagePublisher";

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
