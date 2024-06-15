import FileSystem from "./FileSystem";
import PrintVisitor from "./PrintVisitor";
export default class Client {
  public printFile(file: FileSystem) {
    file.visit(new PrintVisitor());
  }
}
