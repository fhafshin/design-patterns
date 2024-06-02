import MenuComponent from "./MenuComponent";

export default class MenuList implements MenuComponent {
  private menuComponents: MenuComponent[] = [];

  add(menuComponent: MenuComponent): void {
    this.menuComponents.push(menuComponent);
  }

  remove(menuComponent: MenuComponent): void {
    const index = this.menuComponents.indexOf(menuComponent);
    this.menuComponents.splice(index);
  }

  constructor(private title: string) {
    this.menuComponents = [];
  }
  build(): string {
    let result = `<ul>`;
    this.menuComponents.forEach((menuComponent: MenuComponent) => {
      result += menuComponent.build();
    });
    result += `</ul>`;
    return result;
  }
}
