import FileCommand from "../FileCommand";
import FileManager from "../FileManager";

export default class SaveFile implements FileCommand {
  constructor(private _fileManager: FileManager, private _file: File) {}
  execute(): void {
    this._fileManager.save(this);
  }

  public file(): File {
    return this._file;
  }
}
