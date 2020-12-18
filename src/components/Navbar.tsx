import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Skills from "../components/pages/Skills";
import History from "../components/pages/History";
import Contact from "../components/pages/Contact";
import { Tab, Tabs, AppBar } from "@material-ui/core";

function Navbar() {
  const routes = ["/home", "/about", "/skills", "/history", "/contact"];

  return (
    <Router>
      <Route
        path="/"
        render={(history) => (
          <AppBar color="default">
            <Tabs
              value={
                history.location.pathname !== "/"
                  ? history.location.pathname
                  : false
              }
              TabIndicatorProps={{ style: { backgroundColor: "#161616" } }}
              variant="scrollable"
            >
              <Tab
                label="HOME"
                value={routes[0]}
                component={Link}
                to="/home"
                className="navItem"
              />
              <Tab
                label="About"
                value={routes[1]}
                component={Link}
                to={routes[1]}
              />
              <Tab
                label="Skills"
                value={routes[2]}
                component={Link}
                to={routes[2]}
              />
              <Tab
                label="History"
                value={routes[3]}
                component={Link}
                to={routes[3]}
              />

              <Tab
                label="Contact"
                value={routes[4]}
                component={Link}
                to={routes[4]}
              />
            </Tabs>
          </AppBar>
        )}
      />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/history" component={History} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default Navbar;
