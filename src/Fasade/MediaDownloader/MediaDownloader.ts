import FileDownloader from "./FileDownloader";
import MP3Encoder from "./MP3Encoder";

export default class MediaDownloader {
  constructor(
    private fileDownloader: FileDownloader,
    private mp3Encoder: MP3Encoder
  ) {}

  public downloadMP3(url: string): string {
    const fileName = url.split("/").pop() as string;

    const file = this.fileDownloader.download(url, fileName);
    this.mp3Encoder.encode(file);
    return file;
  }
}
