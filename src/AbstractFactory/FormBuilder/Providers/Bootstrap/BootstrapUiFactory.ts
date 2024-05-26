import Button from "../../Element/Button";
import TextArea from "../../Element/TextArea";
import FormUiFactory from "../../FormUiFactory";
import BootstrapButton from "./Elements/BootstrapButton";
import BootstrapTextArea from "./Elements/BootstrapTextArea";

export default class BootstrapUiFactory implements FormUiFactory {
  createTextArea(): TextArea {
    return new BootstrapTextArea();
  }

  createButton(): Button {
    return new BootstrapButton();
  }
}
