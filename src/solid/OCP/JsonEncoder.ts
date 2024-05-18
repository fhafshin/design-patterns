import IEncoder from "./IEncoder";

export default class JsonEncoder implements IEncoder {
  public encode(data: any) {
    return JSON.stringify(data);
  }
}
