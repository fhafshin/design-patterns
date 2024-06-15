import Component from "./Component";
import Visitor from "./Visitor";

export default class ComponentC implements Component {
  accept(visitor: Visitor): void {
    visitor.visitComponentC(this);
  }
}
