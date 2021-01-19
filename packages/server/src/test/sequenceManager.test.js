import { generate, isOrdered, shuffle } from "../logic/sequenceManager";

describe("Testing Sequence Manager Functions", () => {
  it("should generate sequence", () => {
    expect(generate()).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(generate(1)).toStrictEqual([1]);
    expect(generate(5)).toStrictEqual([1, 2, 3, 4, 5]);
  });

  it("should say if a array is ordered", () => {
    expect(isOrdered([1, 2, 3, 4, 5, 6, 7, 8, 9])).toBe(true);
    expect(isOrdered([1, 2, 2, 3, 4, 5, 6, 7, 8])).toBe(false);
    expect(isOrdered([1, 3, 4, 5, 6, 7, 8, 9, 2])).toBe(false);
    expect(isOrdered([0, 1, 2, 3, 4, 5, 6, 7, 8])).toBe(false);
  });

  it("should shuffle a array", () => {
    const orderedArray = [1, 2, 3, 4, 5];

    expect(shuffle(orderedArray).length).toStrictEqual(orderedArray.length);
    expect(shuffle(orderedArray)).toContain(1);
    expect(shuffle(orderedArray)).not.toContain(0);
  });
});

describe("Testing how Sequence Manager Functions works together", () => {
  it("should generate a ordered sequence", () => {
    expect(isOrdered(generate())).toBe(true);
    expect(isOrdered(generate(100))).toBe(true);
    expect(isOrdered(generate(7))).toBe(true);
  });
});
