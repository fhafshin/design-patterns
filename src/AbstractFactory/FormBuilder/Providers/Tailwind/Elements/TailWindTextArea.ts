import Button from "../../../Element/Button";

export default class TailwindTextArea implements Button {
  render(): string {
    return "<textarea class 'Bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> </textarea>";
  }
}
