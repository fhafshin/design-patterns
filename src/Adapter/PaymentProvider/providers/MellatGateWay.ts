import Invoice from "../Invoice";
import OnlineGateWay from "../OnlineGetway";

export default class MellatGateWay implements OnlineGateWay {
  startPayment(invoice: Invoice): void {
    console.log(`Mellat gateway :startPayment with amount ${invoice.amount}`);
  }
}
