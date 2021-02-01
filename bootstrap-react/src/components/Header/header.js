import brand from "../../assets/img/logo_small.png";
import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">
            <img src={brand} alt="" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mx-auto" navbar>
              <NavItem>
                <NavLink href="/home/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/category/">Category</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/designer/">Designer</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about/">About</NavLink>
              </NavItem>
            </Nav>
            <a href="/cart" className="">
              <i class="fas fa-shopping-cart"></i> My Cart (<span>12</span>)
            </a>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
