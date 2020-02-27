import React from "react";
import { shallow } from "enzyme";

import Nav from "../components/Nav";

describe("<CardList />", () => {
  it("Renders without crashing", () => {
    shallow(<Nav />);
  });
});
