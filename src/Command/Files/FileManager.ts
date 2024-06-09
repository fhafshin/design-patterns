import RemoveFile from "./Commands/RemoveFile";
import SaveFile from "./Commands/SaveFile";

export default class FileManager {
  public save(fileCommand: SaveFile): void {
    console.log("Saving file");
  }

  public remove(fileCommand: RemoveFile): void {
    console.log("Removing file");
  }
}
