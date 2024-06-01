import Campaign from "../Campaign";

export default class PPCCampaign extends Campaign {
  run(): void {
    this._promotion.display();
  }
}
