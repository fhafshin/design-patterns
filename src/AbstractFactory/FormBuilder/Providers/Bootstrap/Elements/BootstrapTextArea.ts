import Button from "../../../Element/Button";

export default class BootstrapTextArea implements Button {
  render(): string {
    return "<textarea class 'form-control'></textarea>";
  }
}
