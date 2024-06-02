import MenuComponent from "./MenuComponent";

export default class MenuItem implements MenuComponent {
  constructor(private title: string, private url: string) {}
  build(): string {
    return `<li><a href="${this.url}>${this.title}</a></li>`;
  }
}
