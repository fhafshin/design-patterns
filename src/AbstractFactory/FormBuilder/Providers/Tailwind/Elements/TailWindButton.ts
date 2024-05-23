import Button from "../../../Element/Button";

export default class TailwindButton implements Button {
  render(): string {
    return "<button class 'Bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Button </button>";
  }
}
