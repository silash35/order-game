import {
  arrayIsOrdered as isOrdered,
  generateOrderedArray as generate,
  shuffleArray as shuffle,
} from "./arrayHelpers";

describe("Sequence Manager functions separately", () => {
  it("should generate sequence", () => {
    expect(generate()).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(generate(1)).toStrictEqual([1]);
    expect(generate(5)).toStrictEqual([1, 2, 3, 4, 5]);
  });

  it("should say if a array is ordered", () => {
    expect(isOrdered([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(true);
    expect(isOrdered([1, 3, 4, 5, 6, 7, 8, 9])).toBe(false);
    expect(isOrdered([1, 2, 2, 3, 4, 5, 6, 7])).toBe(false);
    expect(isOrdered([0, 1, 2, 3, 4, 5, 6, 7])).toBe(false);
  });

  it("should shuffle a array", () => {
    const orderedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(shuffle(orderedArray).length).toBe(orderedArray.length);
    expect(shuffle(orderedArray)).toContain(1);
    expect(shuffle(orderedArray)).not.toContain(0);
    expect(shuffle(generate())).not.toBe(shuffle(orderedArray));
  });
});

describe("Sequence Manager functions together", () => {
  it("should generate a ordered sequence", () => {
    expect(isOrdered(generate())).toBe(true);
    expect(isOrdered(generate(100))).toBe(true);
    expect(isOrdered(generate(7))).toBe(true);
  });

  it("should shuffle the generated Array", () => {
    expect(shuffle(generate(10)).length).toBe(generate().length);
    expect(shuffle(generate(100))).toContain(100);
    expect(shuffle(generate(7))).not.toContain(0);
    expect(shuffle(generate(15))).not.toBe(shuffle(generate(15)));
    expect(isOrdered(shuffle(generate(32)))).toBe(false);
  });
});
