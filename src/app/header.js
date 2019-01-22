import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { FaTwitter, FaImdb, FaInstagram, FaYoutube } from "react-icons/fa";

const navItems = [
  {
    to: "/about",
    text: "About",
    children: [
      {
        to: "/about/manny-siverio",
        text: "About Manny Siverio"
      },
      {
        to: "/about/stunt-work",
        text: "Getting into Stunt Work"
      },
      {
        to: "/about/siverio-stunts-history",
        text: "History of Siverio Stunts"
      }
    ]
  },
  {
    to: "/services",
    text: "Services"
  },
  {
    to: "/portfolio",
    text: "Portfolio"
  },
  {
    to: "/media",
    text: "Media"
  },
  {
    to: "/contact",
    text: "Contact"
  },
  {
    to: "https://www.imdb.com/name/nm0803371/",
    text: <FaImdb />
  },
  {
    to: "https://www.instagram.com/siveriostunts/",
    text: <FaInstagram />
  },
  {
    to: "https://twitter.com/siveriostunts",
    text: <FaTwitter />
  },
  {
    to: "https://www.youtube.com/user/SiverioStunts",
    text: <FaYoutube />
  }
  // {
  //   to: '/profile/1',
  //   text: 'Profile 1'
  // },
  // {
  //   to: '/profile/2',
  //   text: 'Profile 2'
  // },
  // {
  //   to: '/login',
  //   text: 'Login',
  //   auth: false
  // },
  // {
  //   to: '/dashboard',
  //   text: 'Dashboard',
  //   auth: true
  // },
  // {
  //   to: '/logout',
  //   text: 'Logout',
  //   auth: true
  // },
  // {
  //   to: "/this-is-broken",
  //   text: "Broken Page"
  // }
];

const isCurrent = (to, current) => {
  if (to === "/" && current === to) {
    return true;
  } else if (to !== "/" && current.includes(to)) {
    return true;
  }

  return false;
};

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
          fixed="top"
          color="dark"
          expand="md"
          className="container-fluid"
        >
          <NavbarBrand href="/">Siverio Stunts</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {navItems.map((navItem, index) => {
                let TheLink;

                if (navItem.children) {
                  TheLink = (
                    <UncontrolledDropdown key={index} nav inNavbar>
                      <DropdownToggle nav caret>
                        {navItem.text}
                      </DropdownToggle>
                      <DropdownMenu>
                        {navItem.children.map((dropdownItem, index) => {
                          return (
                            <DropdownItem
                              key={index}
                              href={dropdownItem.to}
                              active={isCurrent(current, dropdownItem.to)}
                            >
                              {dropdownItem.text}
                            </DropdownItem>
                          );
                        })}
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  );
                } else {
                  TheLink = (
                    <NavItem
                      key={index}
                      active={isCurrent(current, navItem.to)}
                    >
                      <NavLink
                        target={navItem.to.indexOf("http") > -1 ? "_blank" : ""}
                        href={navItem.to}
                      >
                        {navItem.text}
                      </NavLink>
                    </NavItem>
                  );
                }

                // if (link.hasOwnProperty("auth")) {
                //   if (link.auth && isAuthenticated) {
                //     return TheLink;
                //   } else if (!link.auth && !isAuthenticated) {
                //     return TheLink;
                //   }

                //   return null;
                // }

                return TheLink;
              })}
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
