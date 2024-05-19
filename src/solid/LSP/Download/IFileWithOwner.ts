import IFile from "./IFile";

export default interface IFileWithOwner extends IFile {
  changeOwner(owner: string): void;
}
