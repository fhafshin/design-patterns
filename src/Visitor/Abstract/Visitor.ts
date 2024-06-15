import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export default interface Visitor {
  visitComponentA(component: ComponentA): void;
  visitComponentB(component: ComponentB): void;
  visitComponentC(component: ComponentC): void;
}
