"use client";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import React, { useState } from "react";
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CForm,
  CFormInput,
  CButton,
} from "@coreui/react";

const Nav = () => {
  const [visible, setVisible] = useState(false);
  return (
    // <nav className="flex justify-between bg-nav">
    //     <div>
    //         <Link href='/'>
    //             Home
    //         </Link>
    //         <Link href='/CreateTodos'>
    //             Create
    //         </Link>
    //         <Link href='/ViewTodos'>
    //             View
    //         </Link>
    //     </div>
    // </nav>
    <>
      <CNavbar expand="lg" colorScheme="dark" className="bg-primary">
        <CContainer fluid>
          <CNavbarBrand href="#">To-do Application</CNavbarBrand>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav>
              <CNavItem>
                <CNavLink href="/">Home</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="/CreateTodos">Create</CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink href="/ViewTodos">View</CNavLink>
              </CNavItem>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
};

export default Nav;
