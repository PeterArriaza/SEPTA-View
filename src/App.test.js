import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

describe("<App />", () => {
  it("renders the app", () => {
    shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
