import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "../../../pages/Home";
import Blog from "../../../pages/Blog";
import ListUsers from "../../../pages/ListUsers";
import About from "../../../pages/About";
import LogIn from "../../../pages/LogIn";
import SignUp from "../../../pages/SignUp";
import CreateGroup from "../../../pages/CreateGroup";
import Chat from "../../../pages/Chat"

function Routs(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home />}/>
                    <Route path={"/blog"} element={<Blog />}/>
                    <Route path={"/about"} element={<About />}/>
                    <Route path={"/logIn"} element={<LogIn />}/>
                    <Route path={"/signUp"} element={<SignUp />}/>
                    <Route path={"/list"} element={<ListUsers />}/>
                    <Route path={"/createGroup"} element={<CreateGroup />}/>
                    <Route path={"/chat"} element={<Chat />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Routs;