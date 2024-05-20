import EncoderFactory from "./EncoderFactory";
import IEncoder from "./IEncoder";
import IGenericEncoder from "./IGenericEncoder";

export default class GenericEncoder implements IGenericEncoder {
  constructor(private encoderFactory: EncoderFactory) {}

  public encode(data: any, format: string): string {
    const encoder: IEncoder = this.encoderFactory.createEncoder(format);

    return encoder.encode(data);
  }
}
