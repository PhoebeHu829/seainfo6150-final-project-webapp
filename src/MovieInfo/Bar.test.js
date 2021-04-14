import React from "react";
import Bar from "./Bar";

describe("Bar tests", () => {
  it("renders correctly", () => {
    const { container } = render(<Bar categoryId={0} productId="baz" />);
    expect(container).toMatchSnapshot();
  });
});
