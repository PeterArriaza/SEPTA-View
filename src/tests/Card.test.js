import React from "react";
import { shallow } from "enzyme";

import Card from "../components/Card";

describe("<Card />", () => {
  it("Renders without crashing", () => {
    shallow(
      <Card
        id="1"
        start="30th Street"
        end="Ambler"
        url="https://test.com"
        nickname="testCard"
      />
    );
  });
});
