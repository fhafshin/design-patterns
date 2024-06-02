import Component from "./Component";

export default class Leaf implements Component {
  operation(): void {
    console.log("LEAF......");
  }
}
