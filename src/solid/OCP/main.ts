import EncoderFactory from "./EncoderFactory";
import JsonEncoder from "./JsonEncoder";
import XmlEncoder from "./XmlEncoder";

export default class main {
  constructor() {
    const encoderFactory = new EncoderFactory();
    const jsonEncoder = new JsonEncoder();
    const xmlEncoder = new XmlEncoder();
    encoderFactory.addEncoder("json", jsonEncoder);
    encoderFactory.addEncoder("xml", xmlEncoder);
  }
}
