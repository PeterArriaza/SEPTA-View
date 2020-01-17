import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import CardList from "./components/CardList";
import "./styles/App.css";
import AddRoute from "./components/AddRoute";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Route exact path="/" component={CardList} />
        <Route exact path="/add-route" component={AddRoute} />
      </Router>
    </div>
  );
}

// const mapStateToProps = state => ({
//   transitData: Object.keys(state).map(item => state[item])
// });

// export default connect(mapStateToProps)(App);
export default App;
