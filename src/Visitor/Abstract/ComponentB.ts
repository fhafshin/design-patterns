import Component from "./Component";
import Visitor from "./Visitor";

export default class ComponentB implements Component {
  accept(visitor: Visitor): void {
    visitor.visitComponentB(this);
  }
}
