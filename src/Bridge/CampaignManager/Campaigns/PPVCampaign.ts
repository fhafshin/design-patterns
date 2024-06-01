import Campaign from "../Campaign";

export default class PPVCampaign extends Campaign {
  run(): void {
    this._promotion.display();
  }
}
