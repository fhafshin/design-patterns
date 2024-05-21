import IEncoder from "./IEncoder";
import IEncoderFactory from "./IEncoderFactory";

export default class GenericEncoder {
  constructor(private encoderFactory: IEncoderFactory) {}

  public encode(data: any, format: string): string {
    const encoder: IEncoder = this.encoderFactory.createEncoder(format);

    return encoder.encode(data);
  }
}
