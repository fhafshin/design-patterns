import FileCommand from "../FileCommand";
import FileManager from "../FileManager";

export default class RemoveFile implements FileCommand {
  constructor(private _fileManager: FileManager, private _file: File) {}
  execute(): void {
    this._fileManager.remove(this);
  }

  public file(): File {
    return this._file;
  }
}
