import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Nav from "./components/Nav";
import CardList from "./components/CardList";
import "./styles/App.css";
import AddRoute from "./components/AddRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={CardList} />
        <Route exact path="/add-route" component={AddRoute} />
      </div>
    </Router>
  );
}

// const mapStateToProps = state => ({
//   transitData: Object.keys(state).map(item => state[item])
// });

// export default connect(mapStateToProps)(App);
export default App;
