import FileCommand from "./FileCommand";

export default class FileService {
  constructor(private fileCommand: FileCommand) {}

  public setCommand(_fileCommand: FileCommand) {
    this.fileCommand = _fileCommand;
  }

  public save() {
    this.fileCommand.execute();
  }

  public remove() {
    this.fileCommand.execute();
  }
}
