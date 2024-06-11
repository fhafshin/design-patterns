import Observer from "./Observer";

export default interface subject {
  price(): number;
  attach(name: string, observer: Observer): void;
  detach(name: string, observer: Observer): void;
  notify(): void;
}
