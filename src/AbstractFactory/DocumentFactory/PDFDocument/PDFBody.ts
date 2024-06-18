import Body from "../Body";

type TPerson = {
  id: number;
  name: string;
  email: string;
  age: number;
};

type TUpdatePerson = Omit<TPerson, "id">; //حذف فیلد

type TOptionalPerson = Partial<TPerson>; //اختیاری

type TRequiredPerson = Required<TOptionalPerson>;

type TRegisterPerson = Pick<TPerson, "name" | "email">; //فیلد های انتخابی

type ReadOnlyPerson = Readonly<TPerson>;

export default class PDFBody implements Body {
  generate(): string {
    const test: TUpdatePerson = { name: "ddd", email: "ddd", age: 25 };
    const test2: TOptionalPerson = { id: 44 };
    const test3: TRegisterPerson = { email: "25", name: "ddd" };
    const test4: TRequiredPerson = { id: 1, name: "d", email: "ffff", age: 44 };
    const test5: ReadOnlyPerson = { id: 1, name: "d", email: "ffff", age: 44 };

    console.log(test, test2, test3, test4, test5);

    return "PDF BODY";
  }

  infinityLoop(): never {
    while (true) {
      console.log("fff");
    }
  }
}
