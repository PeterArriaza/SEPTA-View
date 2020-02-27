import React from "react";
import { shallow } from "enzyme";

import { CardList } from "../components/CardList";
import Card from "../components/Card";

describe("<CardList />", () => {
  it("Renders without crashing", () => {
    // const cards = [<Card />, <Card />];
    shallow(<CardList transitData={[]} />);
  });
});
