import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Skill from "../components/pages/Skill";
import History from "../components/pages/History";
import Work from "../components/pages/Work";
import Contact from "../components/pages/Contact";
import { Tab, Tabs, AppBar } from "@material-ui/core";
import { NavbarItem } from "../Types";

const Navbar = () => {
  const navbarItem: NavbarItem[] = [
    {
      id: 1,
      route: "/",
      label: "HOME",
    },
    {
      id: 2,
      route: "/about",
      label: "ABOUT",
    },
    {
      id: 3,
      route: "/skills",
      label: "SKILLS",
    },
    {
      id: 4,
      route: "/history",
      label: "HISTORY",
    },
    {
      id: 5,
      route: "/works",
      label: "WORKS",
    },
    {
      id: 6,
      route: "/contact",
      label: "CONTACT",
    },
  ];

  return (
    <Router
      basename={process.env.NODE_ENV === "production" ? "/Portfolio" : ""}
    >
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
              {navbarItem.map((val) => {
                return (
                  <Tab
                    label={val.label}
                    value={val.route}
                    component={Link}
                    key={val.id}
                    to={val.route}
                  />
                );
              })}
            </Tabs>
          </AppBar>
        )}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skill} />
        <Route path="/history" component={History} />
        <Route path="/works" component={Work} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default Navbar;
