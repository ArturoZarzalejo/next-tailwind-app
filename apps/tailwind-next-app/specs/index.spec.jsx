import React from "react";
import { render } from "@testing-library/react";

import Home from "../app/page.js";

describe("Home", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Home />);
    expect(baseElement).toBeTruthy();
  });
});
