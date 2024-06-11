import Observer from "./Observer";

export default interface subject {
  attach(name: string, observer: Observer): void;
  detach(name: string, observer: Observer): void;
  notify(): void;
}
