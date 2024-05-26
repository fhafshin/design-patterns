import Button from "../../Element/Button";
import TextArea from "../../Element/TextArea";
import FormUiFactory from "../../FormUiFactory";
import TailwindButton from "./Elements/TailWindButton";
import TailwindTextArea from "./Elements/TailWindTextArea";

export default class TailWindUiFactory implements FormUiFactory {
  createTextArea(): TextArea {
    return new TailwindTextArea();
  }
  createButton(): Button {
    return new TailwindButton();
  }
}
