import IEncoder from "./IEncoder";

export default class XmlEncoder implements IEncoder {
  public encode(data: any) {
    return data.toString();
  }
}
