import Invoice from "../Invoice";
import OnlineGateWay from "../OnlineGetway";

export default class zarinPalGateWay implements OnlineGateWay {
  startPayment(invoice: Invoice): void {
    console.log(`zarinPal gateway :startPayment with amount ${invoice.amount}`);
  }
}
