import React from 'react';
import {Navbar, Nav, Container} from "react-bootstrap";
import logo from "./logo.jpg";
import Routs from "./UI/route/Routs";


function Header() {

        return (
            <>
                <Navbar
                      fixed={"top"} collapseOnSelect expand={"md"} bg={"dark"} variant={"dark"}>
                    <Container>
                        <Navbar.Brand href={"/"}>
                            <img
                                src={logo}
                                height={"30"}
                                className={"d-inline-block align-top"}
                                alt={"Logo"}
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={"responsive-navbar-nav"}/>
                         <Navbar.Collapse id={"responsive-navbar-nav"}>
                            <Nav className={"mr-auto nav-link"}>
                                <Nav.Link href={"/"}>Home</Nav.Link>
                                <Nav.Link href={"/about"}>Users</Nav.Link>
                                <Nav.Link href={"/blog"}>Blog</Nav.Link>
                                <Nav.Link href={"/logIn"}>LogIn</Nav.Link>
                                <Nav.Link href={"/signUp"}>SignUp</Nav.Link>
                            </Nav>
                         </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routs />
            </>
        )

}

export default Header;
//`

