import React, {Component} from 'react';
import {Navbar, Nav, Container} from "react-bootstrap";
import logo from "./logo.jpg";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import About from "../pages/About";
//
export default class Header extends React.Component {
    render(){
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
                                <Nav.Link href={"/about"}>About</Nav.Link>
                                <Nav.Link href={"/blog"}>Blog</Nav.Link>
                                <Nav.Link href={"/logIn"}>LogIn</Nav.Link>
                                <Nav.Link href={"/signUp"}>SignUp</Nav.Link>
                            </Nav>
                         </Navbar.Collapse>
                    </Container>
                </Navbar>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/About"} element={<About/>}/>
                        <Route path={"/blog"} element={<Blog/>}/>
                        <Route path={"/about"} element={<About/>}/>
                        <Route path={"/logIn"} element={<LogIn/>}/>
                        <Route path={"/signUp"} element={<SignUp/>}/>
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}
//`
