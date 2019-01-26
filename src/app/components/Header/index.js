import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";

import SharedNav from "../SharedNav";

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
        <Navbar dark color="dark" expand="md" className="container-fluid">
          <NavbarBrand href="/">Siverio Stunts</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <SharedNav current={current} className="ml-auto" />
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
