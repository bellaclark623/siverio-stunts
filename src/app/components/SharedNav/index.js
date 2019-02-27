import React from "react";
import {
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { FaTwitter, FaImdb, FaInstagram, FaYoutube } from "react-icons/fa";

import "./SharedNav.css";

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
        text: "Company History"
      }
    ]
  },
  {
    to: "/services",
    text: "Services"
  },
  {
    to: "/credits",
    text: "Credits"
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
    wrapperClass: "social-icons-wrapper",
    items: [
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
    ]
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

const renderNavItem = (key, item, current) => (
  <NavLink target={item.to.indexOf("http") > -1 ? "_blank" : ""} href={item.to}>
    {item.text}
  </NavLink>
);

export default ({ className, current, flatten }) => {
  let sortedNavItems = navItems;

  if (flatten) {
    sortedNavItems = [];

    navItems.forEach(item => {
      if (!item.children) {
        sortedNavItems.push(item);
        return;
      }

      item.children.forEach(child => {
        sortedNavItems.push(child);
      });
    });
  }

  let wrappedNavItems = [];

  sortedNavItems.forEach(navItem => {
    if (!navItem.items) {
      wrappedNavItems.push(navItem);
      return;
    }

    var wrappedContent = [];

    navItem.items.forEach(item => {
      console.log(item);

      wrappedContent.push(
        renderNavItem(item.to, item, isCurrent(current, item.to))
      );
    });

    wrappedNavItems.push({
      content: <li className={navItem.wrapperClass}>{[...wrappedContent]}</li>
    });
  });

  console.log(wrappedNavItems);

  return (
    <Nav navbar className={className}>
      {wrappedNavItems.map((navItem, index) => {
        let TheLink;

        if (navItem.children) {
          TheLink = (
            <UncontrolledDropdown key={index} nav inNavbar>
              <DropdownToggle
                nav
                caret
                className="dropdown-toggle"
                dataToggle="dropdown"
              >
                {navItem.text}
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu">
                {navItem.children.map((dropdownItem, index) => (
                  <DropdownItem
                    key={index}
                    href={dropdownItem.to}
                    active={isCurrent(current, dropdownItem.to)}
                  >
                    {dropdownItem.text}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          );
        } else {
          TheLink = navItem.content || (
            <NavItem key={index} active={isCurrent(current, navItem.to)}>
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
  );
};
