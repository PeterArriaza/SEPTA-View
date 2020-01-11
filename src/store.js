import { createStore } from "redux";
import transitData from "./reducers/transitData";

const store = createStore(transitData);

export default store;
