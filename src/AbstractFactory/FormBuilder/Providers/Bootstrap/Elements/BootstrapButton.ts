import Button from "../../../Element/Button";

export default class BootstrapButton implements Button {
  render(): string {
    return "<button class 'Btn btn-primary'>Button  <</button>";
  }
}
