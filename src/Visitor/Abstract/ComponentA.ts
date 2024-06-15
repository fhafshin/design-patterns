import Component from "./Component";
import Visitor from "./Visitor";

export default class ComponentA implements Component {
  accept(visitor: Visitor): void {
    visitor.visitComponentA(this);
  }
}
