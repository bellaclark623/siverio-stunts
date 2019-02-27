import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";
import siveriologo from "../../assets/siveriostuntslogo.png";

import SharedNav from "../SharedNav";

import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const {
      // isAuthenticated,
      current
    } = this.props;

    return (
      <header id="header">
        <Navbar
          dark
          color="dark"
          expand="md"
          className="navbar container-fluid"
        >
          <NavbarBrand href="/">
            <img
              src={siveriologo}
              className="siveriostuntslogo"
              alt="Siverio Stunts Logo"
            />
          </NavbarBrand>
          <div className="togglewrapper">
            <NavbarToggler onClick={this.toggle} />
          </div>
          <Collapse isOpen={this.state.isOpen} navbar>
            <SharedNav current={current} className="ml-auto" />
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
