import Observer from "./Observer";

export default interface subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(): void;
}
