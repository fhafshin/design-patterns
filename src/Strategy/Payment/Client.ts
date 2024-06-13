import CardToCardHandler from "../../Bridge/PaymentModule/Handlers/CardToCardHandler";
import Customer from "./Customer";
import Order from "./Order";
import CardToCardPayment from "./PaymentMethod/CardToCardPayment";
import PaymentService from "./PaymentService";

export default class Client {
  public paymentOrder(): void {
    const order = new Order(100, new Customer());

    const paymentService = new PaymentService();

    paymentService.setPaymentMethod(new CardToCardPayment());

    paymentService.startPay(order);
  }
}
