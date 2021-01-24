import { generateOrderedArray } from "./arrayHelpers";
import createGame from "./createGame";

let game;

beforeEach(() => {
  game = createGame();
});

describe("game functions", () => {
  it("should give a shuffled sequence", () => {
    const orderedArray = generateOrderedArray(10);

    orderedArray.forEach((n) => {
      expect(game.getSeq()).toContain(n);
    });
  });

  it("should add a number", () => {
    expect(game.addNumber(1)).toBe("right");
    expect(game.addNumber(3)).toBe("wrong");
  });

  it("should complete a valid game", () => {
    const orderedArray = generateOrderedArray(10);

    expect(game.getState().isOrdered).toBe(true);
    expect(game.getState().isComplete).toBe(false);

    orderedArray.forEach((n) => {
      game.addNumber(n);
    });

    expect(game.getState().isOrdered).toBe(true);
    expect(game.getState().isComplete).toBe(true);
  });

  it("should not complete a invalid game", () => {
    expect(game.getState().isOrdered).toBe(true);
    expect(game.getState().isComplete).toBe(false);

    game.addNumber(1);
    game.addNumber(2);
    game.addNumber(4);

    expect(game.getState().isOrdered).toBe(false);
    expect(game.getState().isComplete).toBe(false);
  });
});
