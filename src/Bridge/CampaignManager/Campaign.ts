import Promotion from "./Promotion";

export default abstract class Campaign {
  abstract run(): void;

  public changePromotion(promotion: Promotion) {
    this._promotion = promotion;
  }
  constructor(protected _promotion: Promotion) {}
}
