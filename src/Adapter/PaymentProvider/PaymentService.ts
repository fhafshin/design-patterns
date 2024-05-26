import Invoice from "./Invoice";
import OnlineGateWay from "./OnlineGetway";

export default class PaymentService {
  private _paymentGateWay: OnlineGateWay;

  constructor(paymentGateWay: OnlineGateWay) {
    this._paymentGateWay = paymentGateWay;
  }

  public payInvoice(invoice: Invoice): void {
    this._paymentGateWay.startPayment(invoice);
  }
}
