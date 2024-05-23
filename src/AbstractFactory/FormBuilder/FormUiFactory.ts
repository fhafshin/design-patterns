import Button from "./Element/Button";
import TextArea from "./Element/TextArea";

export default interface FormUiFactory {
  createTextArea(): TextArea;
  createButton(): Button;
}
