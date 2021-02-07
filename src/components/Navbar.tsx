import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Skill from "../components/pages/Skill";
import History from "../components/pages/History";
import Contact from "../components/pages/Contact";
import { Tab, Tabs, AppBar } from "@material-ui/core";
import { NavbarItem } from "../Types";

const Navbar = () => {
  const navbarItem: NavbarItem[] = [
    {
      route: "/",
      label: "HOME",
    },
    {
      route: "/about",
      label: "ABOUT",
    },
    {
      route: "/skills",
      label: "SKILLS",
    },
    {
      route: "/history",
      label: "HISTORY",
    },
    {
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
              <Tab
                label={navbarItem[0].label}
                value={navbarItem[0].route}
                component={Link}
                to={navbarItem[0].route}
              />
              <Tab
                label={navbarItem[1].label}
                value={navbarItem[1].route}
                component={Link}
                to={navbarItem[1].route}
              />
              <Tab
                label={navbarItem[2].label}
                value={navbarItem[2].route}
                component={Link}
                to={navbarItem[2].route}
              />
              <Tab
                label={navbarItem[3].label}
                value={navbarItem[3].route}
                component={Link}
                to={navbarItem[3].route}
              />

              <Tab
                label={navbarItem[4].label}
                value={navbarItem[4].route}
                component={Link}
                to={navbarItem[4].route}
              />
            </Tabs>
          </AppBar>
        )}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skill} />
        <Route path="/history" component={History} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default Navbar;
