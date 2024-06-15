export default interface Observer {
  update(event: string, emitter: any, data: Object): void;
}
