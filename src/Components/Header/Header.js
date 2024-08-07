import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Header() {
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <section className="header-section" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
        <div className="header" ref={navbarRef}>
          <Navbar
            collapseOnSelect
            expand="lg"
            className="bg-body-tertiary shadow"
            expanded={expanded}
            onToggle={() => setExpanded(!expanded)}
          >
            <Container>
              <Navbar.Brand href="#home">
                <Link to="/">
                  <img
                    className="logo"
                    src="/assets/images/header/otowala-logo.png"
                    alt="Otowala Logo"
                  />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/aboutus">About Us</Nav.Link>
                  <Nav.Link as={HashLink} smooth to="/#ourPresence">Our Presence</Nav.Link>
                  <Nav.Link as={HashLink} smooth to="/#whychooseus">Why Choose Us</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="#deets">
                    <Nav.Link href="/contactus">
                      <Button className="Contact-button">Contact Us</Button>
                    </Nav.Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </section>
    </>
  );
}

export default Header;
