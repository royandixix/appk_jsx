import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext"
import { NavLink as Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  NavbarBrand,
  Button,
} from "reactstrap";


const NavbarComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const {value, setValue} = useContext(CartContext)


  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/mahasiswa">Mahasiswa</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/kelas">Kelas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/hooks">Hooks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/useeffects">Use Effects</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/produk">Produk</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/reducer">Reducer</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/tagihan">Tagihan</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            <Button color="danger">
              <i className="fa fa-shopping-cart"></i>
              <span className="badge badge-light">{value}</span>
            </Button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
