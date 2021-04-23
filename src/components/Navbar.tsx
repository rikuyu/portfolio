import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "../assets/styles/navbar.scss";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Skill from "../components/pages/Skill";
import History from "../components/pages/History";
import Products from "../components/pages/Products";
import Contact from "../components/pages/Contact";
import { Tab, Tabs, AppBar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { NavbarItem } from "../Types";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PortraitIcon from "@material-ui/icons/Portrait";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";

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
      label: "SKILL",
    },
    {
      id: 4,
      route: "/history",
      label: "HISTORY",
    },
    {
      id: 5,
      route: "/products",
      label: "PRODUCT",
    },
    {
      id: 6,
      route: "/contact",
      label: "CONTACT",
    },
  ];

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
                      component={Link}
                      to={val.route}
                    />
                  );
                })}
              </Tabs>
            </div>
            <div className="btn-menu">
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
                  <HomeOutlinedIcon className="menu-item-icon" />
                  HOME
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/about">
                  <PortraitIcon className="menu-item-icon" />
                  ABOUT
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/skills">
                  <BuildOutlinedIcon className="menu-item-icon" />
                  SKILLS
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/history">
                  <QueryBuilderIcon className="menu-item-icon" />
                  HISTORY
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/products">
                  <ColorLensOutlinedIcon className="menu-item-icon" />
                  PRODUCTS
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/contact">
                  <MailOutlineOutlinedIcon className="menu-item-icon" />
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
