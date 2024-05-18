import IEncoder from "./IEncoder";
import IEncoderFactory from "./IEncoderFactory";
import IEncoderFactoryConfig from "./IEncoderFactoryConfig";
import JsonEncoder from "./JsonEncoder";
import XmlEncoder from "./XmlEncoder";

export default class EncoderFactory
  implements IEncoderFactory, IEncoderFactoryConfig
{
  private encoders: Map<string, IEncoder> = new Map<string, IEncoder>();

  public addEncoder(format: string, encoder: IEncoder) {
    this.encoders.set(format, encoder);
  }
  public createEncoder(format: string): IEncoder {
    if (!this.encoders.has(format)) throw new Error("Encoder");

    return this.encoders.get(format) as IEncoder;
  }
}
