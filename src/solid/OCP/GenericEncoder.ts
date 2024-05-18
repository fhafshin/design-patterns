import JsonEncoder from "./JsonEncoder";
import XmlEncoder from "./XmlEncoder";

export default class GenericEncoder {
  public encode(data: any, format: string) {
    let encoder;

    if (format === "json") {
      encoder = new JsonEncoder();
    } else if (format === "xml") {
      encoder = new XmlEncoder();
    } else {
      throw new Error("not found....");
    }
  }
}
