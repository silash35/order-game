import "@testing-library/jest-dom/extend-expect";

import { render } from "@testing-library/react";
import React from "react";

import BestMatch from "./index";

describe("BestMatch react component", () => {
  it("should be empty on if there is no time", () => {
    const emptyComponent = render(<></>).container;
    const time = undefined;

    expect(render(<BestMatch />).container).toEqual(emptyComponent);
    expect(render(<BestMatch time={time} />).container).toEqual(emptyComponent);
  });

  it("should print the given time", () => {
    const { getByText, queryByText } = render(<BestMatch time={5328} />);
    getByText("5328", { exact: false });

    expect(queryByText("5328", { exact: false })).toBeInTheDocument();
    expect(queryByText("5329", { exact: false })).not.toBeInTheDocument();
  });
});
