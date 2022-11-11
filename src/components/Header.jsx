import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ThemeContext } from "../Context/ThemeProvider";
import { BiMoon, BiCart, BiSun, BiDoorOpen } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";


const Header = () => {
  const navigate= useNavigate()
  const { theme, setThemeMode, favorites } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(theme);
  useEffect(() => {
    setThemeMode(darkMode);
  }, [darkMode]);


  return (
    <Navbar
      collapseOnSelect
      variant={darkMode ? "dark" : "light"}
      className={
        darkMode ? "bg-light-black border-bottom" : "bg-light border-bottom"
      }
      style={{ width: "100%", position: "fixed", zIndex: 100 }}
      expand="md"
    >
      <Container>
        <Link to="/">
          <Navbar.Brand
            className={darkMode ? "text-dark-primary" : "text-light-primary"}
          >
            <b>BAKAR</b>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              className={darkMode ? "text-dark-primary" : "text-light-primary"}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <BiSun size="1.7rem" /> : <BiMoon size="1.7rem" />}
            </Nav.Link>
            <Link
              to="/cart"
              className={`${
                darkMode ? "text-dark-primary" : "text-light-primary"
              } d-flex align-items-center`}
              style={{
                transform:
                  favorites?.length != 0
                    ? "translateX(2rem)"
                    : "translateX(0px)",
                textDecoration: "none",
                width: "4rem",
                transition: "1s",
              }}
            >
              <BiCart size="2rem" />
              {theme ? (
                <span
                  style={{
                    position: "relative",
                    left: "-21px",
                    top: "-18px",
                    display: "inline-block",
                  }}
                >
                  {favorites.length == 0 ? " " : favorites.length}
                </span>
              ) : (
                <span
                  style={{
                    position: "relative",
                    left: "-21px",
                    top: "-18px",
                    display: "inline-block",
                  }}
                >
                  {favorites.length == 0 ? " " : favorites.length}
                </span>
              )}
              {/* <span style={{ marginLeft: favorites?.length !=0 ? "-13px" : 0 }}>Cart</span> */}
            </Link>
            <NavDropdown
              title={<BiDoorOpen size="2rem" />}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item onClick={() => navigate("/login")}>
                Login
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/register")}>
                Register
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
