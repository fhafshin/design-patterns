import EncoderFactory from "./EncoderFactory";
import IEncoder from "./IEncoder";
import IEncoderFactory from "./IEncoderFactory";
import JsonEncoder from "./JsonEncoder";
import XmlEncoder from "./XmlEncoder";

export default class GenericEncoder {
  constructor(private encoderFactory: IEncoderFactory) {}
  public encode(data: any, format: string): string {
    const encoder: IEncoder = this.encoderFactory.createEncoder(format);

    return encoder.encode(data);
  }
}
