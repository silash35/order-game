import { jest } from "@jest/globals";
import { render } from "@testing-library/react";
import React from "react";

const socket = {};
jest.mock("./BestMatch.module.scss");
socket.on = jest.fn(() => {});

import BestMatch from "./index";

describe("", () => {
  it("", () => {
    global.socket = socket;
    const { queryByText } = render(<BestMatch />);
    expect(queryByText("milliseconds")).not.toBeTruthy();
  });
});
