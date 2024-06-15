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
import Composite from "./Composite/Consept/Composite";
import Leaf from "./Composite/Consept/Leaf";
import Component from "./Composite/Consept/Component";
import Order from "./State/Order/Order";
import Client from "./Visitor/FileSystem/Client";
import File from "./Visitor/FileSystem/File";
import Directory from "./Visitor/FileSystem/Directory";
dotenv.config();

const app = new application();

console.log(process.env.APP_PORT);

app.run(Number(process.env.APP_PORT));

// const notifier: NotifierCreator = new TelegramNotifierCreator();

// const l1 = new Leaf();
// const l2 = new Leaf();
// const l3 = new Leaf();
// const leaf1: Component = new Composite([l1, l2, l3]);

// const leaf: Component = new Composite([l1, l2, l3, leaf1]);

// leaf.operation();

const client = new Client();
client.printFile(new Directory());
client.printFile(new File());
