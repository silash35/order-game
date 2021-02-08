import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import StartGame from "./index";

// mock socket.io
const socket = {};
socket.on = jest.fn(() => {});
socket.emit = jest.fn(() => {});
global.socket = socket;

describe("StartGame react component", () => {
  it("should show that the player won when gameState value is victory", () => {
    const gameState = { value: "victory" };
    const { getByText, queryByText } = render(
      <StartGame gameState={gameState} />
    );

    getByText("Win", { exact: false });
    expect(queryByText("Win", { exact: false })).toBeInTheDocument();
    expect(queryByText("Lose", { exact: false })).not.toBeInTheDocument();
    expect(queryByText("Start", { exact: false })).not.toBeInTheDocument();
  });

  it("should show that the player lose when gameState value is lost", () => {
    const gameState = { value: "lost" };
    const { getByText, queryByText } = render(
      <StartGame gameState={gameState} />
    );

    getByText("Lose", { exact: false });
    expect(queryByText("Win", { exact: false })).not.toBeInTheDocument();
    expect(queryByText("Lose", { exact: false })).toBeInTheDocument();
    expect(queryByText("Start", { exact: false })).not.toBeInTheDocument();
  });

  it("should show 'Start Game' when gameState value is default", () => {
    const gameState = { value: "default" };
    const { getByText, queryByText } = render(
      <StartGame gameState={gameState} />
    );

    getByText("Start", { exact: false });
    expect(queryByText("Win", { exact: false })).not.toBeInTheDocument();
    expect(queryByText("Lose", { exact: false })).not.toBeInTheDocument();
    expect(queryByText("Start", { exact: false })).toBeInTheDocument();
  });

  it("should handle click", () => {
    const gameState = { value: "default", set: jest.fn(() => {}) };
    const { getByText } = render(<StartGame gameState={gameState} />);
    const button = getByText("Start", { exact: false });
    expect(button).toBeInTheDocument();

    userEvent.click(button);

    expect(socket.emit.mock.calls[0][0]).toBe("game started");
    expect(gameState.set.mock.calls[0][0]).toBe("playing");
  });
});
