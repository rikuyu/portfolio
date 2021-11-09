import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "../assets/styles/navbar.scss";
import Home from "../pages/Home";
import About from "../pages/About";
import Skill from "../pages/Skill";
import History from "../pages/History";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import { Tab, Tabs, AppBar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { NavbarItem } from "../Types";
import { NavbarItemLabel } from "../Types";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@mui/icons-material/Home";
import PortraitIcon from "@mui/icons-material/Portrait";
import BuildIcon from "@mui/icons-material/Build";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";

const Navbar = () => {
  const navbarItem: NavbarItem[] = [
    {
      id: 1,
      route: "/",
      label: "HOME",
      icon: "HOME",
    },
    {
      id: 2,
      route: "/about",
      label: "ABOUT",
      icon: "ABOUT",
    },
    {
      id: 3,
      route: "/skills",
      label: "SKILL",
      icon: "SKILL",
    },
    {
      id: 4,
      route: "/history",
      label: "HISTORY",
      icon: "HISTORY",
    },
    {
      id: 5,
      route: "/products",
      label: "PRODUCT",
      icon: "PRODUCT",
    },
    {
      id: 6,
      route: "/contact",
      label: "CONTACT",
      icon: "CONTACT",
    },
  ];

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const selectIcon = (icon: NavbarItemLabel) => {
    switch (icon) {
      case "HOME":
        return <HomeIcon className="menu-item-icon large-screen home" />;
      case "ABOUT":
        return (
          <PortraitIcon className="menu-item-icon large-screen about-me" />
        );
      case "SKILL":
        return <BuildIcon className="menu-item-icon large-screen skills" />;
      case "HISTORY":
        return (
          <AccessTimeIcon className="menu-item-icon large-screen my-history" />
        );
      case "PRODUCT":
        return (
          <ColorLensIcon className="menu-item-icon large-screen products" />
        );
      case "CONTACT":
        return <EmailIcon className="menu-item-icon large-screen contacts" />;
    }
  };

  return (
    <Router
      basename={process.env.NODE_ENV === "production" ? "/Portfolio" : ""}
    >
      <Route
        path="/"
        render={(history) => (
          <AppBar color="default">
            <div className="tabs">
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
                      key={val.id}
                      // icon={selectIcon(val.icon)}
                      component={Link}
                      to={val.route}
                    />
                  );
                })}
              </Tabs>
            </div>
            <div className="btn-menu">
              <p className="navbar-title">Portfolio</p>
              <div className="btn">
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  {!anchorEl ? (
                    <MenuIcon className="menu-icon" />
                  ) : (
                    <CloseIcon className="close-icon" />
                  )}
                </Button>
              </div>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} component={Link} to="/">
                  <HomeIcon className="menu-item-icon home" />
                  HOME
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/about">
                  <PortraitIcon className="menu-item-icon about-me" />
                  ABOUT
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/skills">
                  <BuildIcon className="menu-item-icon skills" />
                  SKILLS
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/history">
                  <AccessTimeIcon className="menu-item-icon my-history" />
                  HISTORY
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/products">
                  <ColorLensIcon className="menu-item-icon products" />
                  PRODUCTS
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/contact">
                  <EmailIcon className="menu-item-icon contacts" />
                  CONTACT
                </MenuItem>
              </Menu>
            </div>
          </AppBar>
        )}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skill} />
        <Route path="/history" component={History} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default Navbar;
