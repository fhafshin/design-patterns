import Component from "./Component";

export default class Composite implements Component {
  constructor(private components: Component[]) {}

  operation(): void {
    this.components.forEach((component) => component.operation());
  }
}
