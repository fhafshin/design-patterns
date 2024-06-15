import Visitor from "./Visitor";

export default interface Component {
  accept(visitor: Visitor): void;
}
