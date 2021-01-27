import { render } from "@testing-library/react";
import React from "react";

import BestMatch from "./index";

const socket = {};
socket.on = jest.mock(() => {});

describe("", () => {
  it("", () => {
    const { queryByText } = render(<BestMatch />);
    expect(queryByText("milliseconds")).not.toBeTruthy();
  });
});
