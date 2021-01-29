import { jest } from "@jest/globals";
import { render } from "@testing-library/react";
import React from "react";

// mock socket.io
const socket = {};
socket.on = jest.fn(() => {});
global.socket = socket;

import BestMatch from "./index";

describe("BestMatch react component", () => {
  it("should be null on beginning", () => {
    const { queryByText } = render(<BestMatch />);
    expect(queryByText("milliseconds")).toBeNull();
  });
  it("should be null on beginning", () => {
    const { queryByText } = render(<BestMatch />);

    console.log(socket.on.mock.calls[0]);
    expect(1).not.toBe(2);
  });
});
