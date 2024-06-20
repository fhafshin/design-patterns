import * as dotenv from "dotenv";
import application from "./app";
import { func } from "./test";

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

func();
