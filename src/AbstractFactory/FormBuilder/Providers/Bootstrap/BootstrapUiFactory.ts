import Button from "../../Element/Button";
import TextArea from "../../Element/TextArea";
import FormUiFactory from "../../FormUiFactory";
import BootstrapButton from "./Elements/BootstrapButton";
import BootstrapTextArea from "./Elements/BootstrapTextArea";

export default class BootstrapUiFactory implements FormUiFactory {
  createTextArea(): TextArea {
    throw new BootstrapTextArea();
  }

  createButton(): Button {
    throw new BootstrapButton();
  }
}
