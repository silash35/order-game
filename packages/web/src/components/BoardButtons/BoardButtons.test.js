import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import BoardButtons from "./index";

// mock socket.io
const socket = {};
socket.on = jest.fn(() => {});
socket.emit = jest.fn(() => {});
global.socket = socket;

describe("BoardButtons react component", () => {
  it("should render a button with the given number", () => {
    const { getByText, queryByText } = render(<BoardButtons number={4} />);

    getByText("4", { exact: false });
    expect(queryByText("4", { exact: false })).toBeInTheDocument();
    expect(queryByText("1", { exact: false })).not.toBeInTheDocument();
    expect(queryByText("8", { exact: false })).not.toBeInTheDocument();
  });

  it("should emit socket event only on fist click", () => {
    const { getByText } = render(<BoardButtons number={8} />);
    const button = getByText("8", { exact: false });
    expect(button).toBeInTheDocument();

    userEvent.click(button);

    expect(socket.emit.mock.calls[0][0]).toBe("number pressed");
    expect(socket.emit.mock.calls[0][1]).toBe(8);

    userEvent.click(button);

    expect(socket.emit.mock.calls[1]).toBeUndefined();
  });

  it("should change CSS classes on click", () => {
    const { getByText } = render(<BoardButtons number={34} />);
    const button = getByText("34", { exact: false });
    expect(button).toBeInTheDocument();

    expect(button.classList[0]).toBe("button");
    expect(button.classList[1]).toBe("none");

    userEvent.click(button);

    expect(button.classList[0]).toBe("button");
    expect(button.classList[1]).toBe("loading");
  });
});
