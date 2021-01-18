import { generate, isOrdered, shuffle } from "../logic/sequenceManager";

describe("Testing Sequence Manager", () => {
  it("should generate Sequence", () => {
    expect(generate()).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(generate(1)).toStrictEqual([1]);
    expect(generate(5)).toStrictEqual([1, 2, 3, 4, 5]);
  });
});
