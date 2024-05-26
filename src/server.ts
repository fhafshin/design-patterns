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
import DocumentService from "./AbstractFactory/DocumentFactory/DocumentService";
import PDFFactory from "./AbstractFactory/DocumentFactory/PDFDocument/PDFFactory";
import WordFactory from "./AbstractFactory/DocumentFactory/WordDucoment/WordFactory";
import APIService from "./Builder/Request/APIService";
import OrderBuilder from "./Builder/orderBuilder/OrderBuilder";

dotenv.config();

const app = new application();

console.log(process.env.APP_PORT);

app.run(Number(process.env.APP_PORT));

const notifier: NotifierCreator = new TelegramNotifierCreator();

const order = OrderBuilder.onOrder().withCustomer("create .....").build();

const order2 = OrderBuilder.onOrder(order)
  .withFinalPrice(20)
  .withCustomer("jjjjj")
  .build();
console.log(order);

console.log(order2);
