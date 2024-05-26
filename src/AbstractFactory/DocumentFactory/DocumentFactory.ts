import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";

export default interface DocumentFactory {
  createBody(): Body;

  createHeader(): Header;

  createFooter(): Footer;
}
