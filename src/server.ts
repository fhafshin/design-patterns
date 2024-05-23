import * as dotenv from "dotenv";
import application from "./app";
import TwitterMessagePublisher from "./FactoryMethod/example1/MessagePublisher/TwitterMessagePublisher";
import SocialService from "./FactoryMethod/example1/SocialService";
import AccountCreator from "./FactoryMethod/example2/AccountCreator";
import GeneralAccountCreator from "./FactoryMethod/example2/AccountCreators/GeneralAccountCreator";
import User from "./FactoryMethod/example2/User";
import TelegramNotifier from "./FactoryMethod/Notifications/AlertProviders/TelegramNotifier";
import Notifier from "./FactoryMethod/Notifications/Notifier";
import Alert from "./FactoryMethod/Notifications/Alert";
import TelegramNotifierCreator from "./FactoryMethod/Notifications/AlertProviders/TelegramNotifierCreator";
import NotifierCreator from "./FactoryMethod/Notifications/NotifierCreator";

dotenv.config();

const app = new application();

console.log(process.env.APP_PORT);

app.run(Number(process.env.APP_PORT));

const notifier: NotifierCreator = new TelegramNotifierCreator();

notifier.notify(new Alert("message", "alert"));
