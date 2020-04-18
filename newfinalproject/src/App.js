import React from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li className="logo">Marcela Hernandez</li>
            <li className="right"><NavLink to="/contact">Contact</NavLink></li>
            <li className="right"><NavLink to="/about">About</NavLink></li>
            <li className="right"><NavLink exact to="/">Home</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
