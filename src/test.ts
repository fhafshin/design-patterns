async function test(str: string, num: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log(str);
      resolve();
    }, num);
  });
}
export async function func() {
  await test("one", 2000);
  await test("two", 500);
  console.log("end");

  const counter = new Sequence(1, 100, 7);

  for (const num of counter) console.log(num);

  return;
}

class Sequence {
  constructor(
    private start: number,
    private end: number,
    private interval: number
  ) {}

  *[Symbol.iterator]() {
    for (let index = this.start; index < this.end; index += this.interval) {
      yield index;
    }
  }
}
