import fastestTime from "./fastestTime";

describe("fastestTime", () => {
  it("should be undefined on fist run", () => {
    expect(fastestTime.get()).toBeUndefined();
  });

  it("should only accept valid values", () => {
    fastestTime.update(-1);
    fastestTime.update(0);
    expect(fastestTime.get()).toBeUndefined();

    fastestTime.update(4000);
    expect(fastestTime.get()).toBe(4000);
  });

  it("should give the lower value", () => {
    fastestTime.update(2000);
    fastestTime.update(1000);
    fastestTime.update(3000);
    expect(fastestTime.get()).toBe(1000);
  });
});
