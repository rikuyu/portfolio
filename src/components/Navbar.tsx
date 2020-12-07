import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Top from "../components/pages/Top";
import Skills from "../components/pages/Skills";
import Blog from "../components/pages/Blog";
import Contact from "../components/pages/Contact";
import "../assets/styles/navbar.scss";

function Navbar() {
  return (
    <div className="Navbar">
      <Router>
        <div className="links">
          <Link to="/" className="a">
            About
          </Link>
          <span className="a">|</span>
          <Link to="/skill" className="a">
            Skill
          </Link>
          <span className="a">|</span>
          <Link to="/blog" className="a">
            Blog
          </Link>
          <span className="a">|</span>
          <Link to="/contact" className="a">
            Contact
          </Link>
        </div>
        <br />
        <Switch>
          <Route exact path="/" component={Top} />
          <Route path="/Skill" component={Skills} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default Navbar;
