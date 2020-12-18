import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Top from "../components/pages/Top";
import About from "../components/pages/About";
import Skills from "../components/pages/Skills";
import History from "../components/pages/History";
import Blog from "../components/pages/Blog";
import Contact from "../components/pages/Contact";
import "../assets/styles/navbar.scss";
import { Tab, Tabs, AppBar } from "@material-ui/core";

function Navbar() {
  const routes = ["/top", "/about", "/skills", "/history", "/blog", "/contact"];

  const styles = {
    tabColor: {
      color: "#161616",
      fontWeight: "550",
    },
    tabUnderLine: { backgroundColor: "#161616" },
  };

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
                label="Top"
                value={routes[0]}
                component={Link}
                to="/top"
                // style={styles.tabColor}
              />
              <Tab
                label="About"
                value={routes[1]}
                component={Link}
                to={routes[1]}
                // style={styles.tabColor}
              />
              <Tab
                label="Skills"
                value={routes[2]}
                component={Link}
                to={routes[2]}
                // style={styles.tabColor}
              />
              <Tab
                label="History"
                value={routes[3]}
                component={Link}
                to={routes[3]}
                // style={styles.tabColor}
              />
              <Tab
                label="Blog"
                value={routes[4]}
                component={Link}
                to={routes[4]}
                // style={styles.tabColor}
              />
              <Tab
                label="Contact"
                value={routes[5]}
                component={Link}
                to={routes[5]}
                // style={styles.tabColor}
              />
            </Tabs>
          </AppBar>
        )}
      />
      <Switch>
        <Route exact path="/top" component={Top} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/history" component={History} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default Navbar;
