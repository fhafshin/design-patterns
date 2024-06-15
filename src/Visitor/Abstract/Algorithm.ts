import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import Visitor from "./Visitor";

export default class Algorithm implements Visitor {
  visitComponentA(component: ComponentA): void {
    throw new Error("Method not implemented.");
  }
  visitComponentB(component: ComponentB): void {
    throw new Error("Method not implemented.");
  }
  visitComponentC(component: ComponentC): void {
    throw new Error("Method not implemented.");
  }
}
