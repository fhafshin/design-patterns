import { response } from "express";
import fs from "fs";
import http from "http";

export default class FileDownloader {
  public download(url: string, fileName: string): string {
    const file = fs.createWriteStream(fileName);
    http.get(url, (response) => {
      response.pipe(file);
    });

    file.on("error", (error) => {
      console.log(error);
    });

    return fileName;
  }
}
