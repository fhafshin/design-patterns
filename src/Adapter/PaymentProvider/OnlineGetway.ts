import Invoice from "./Invoice";

export default interface OnlineGateWay {
  startPayment(invoice: Invoice): void;
}
