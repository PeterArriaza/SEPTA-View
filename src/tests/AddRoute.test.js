import React from "react";
import { shallow } from "enzyme";

import { AddRoute } from "../components/AddRoute";

describe("<CardList />", () => {
  it("Renders without crashing", () => {
    shallow(<AddRoute transitData={[]} />);
  });
});
