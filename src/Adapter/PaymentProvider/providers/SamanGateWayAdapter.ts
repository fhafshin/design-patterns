import Invoice from "../Invoice";
import OnlineGateWay from "../OnlineGetway";
import SamanGateWay from "../SamanGateway";

export default class SamanGateWayAdapter implements OnlineGateWay {
  private samanGateWay: SamanGateWay;

  constructor(samanGateWay: SamanGateWay) {
    this.samanGateWay = samanGateWay;
  }

  startPayment(invoice: Invoice): void {
    this.samanGateWay.pay(invoice.amount());
  }
}
