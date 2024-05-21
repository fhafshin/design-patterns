import EncoderFactory from "./EncoderFactory";
import GenericEncoder from "./GenericEncoder";
import IEncoderFactory from "./IEncoderFactory";
import IEncoderFactoryConfig from "./IEncoderFactoryConfig";
import JsonEncoder from "./JsonEncoder";
import XmlEncoder from "./XmlEncoder";

export default class Main {
  constructor() {
    const encoderFactoryConfig: IEncoderFactoryConfig = new EncoderFactory();

    const jsonEncoder = new JsonEncoder();
    const xmlEncoder = new XmlEncoder();

    encoderFactoryConfig.addEncoder("json", jsonEncoder);
    encoderFactoryConfig.addEncoder("xml", xmlEncoder);

    const genericEncoder = new GenericEncoder(
      encoderFactoryConfig as EncoderFactory
    );

    console.log(genericEncoder.encode("kkkk", "xml"));
  }
}
