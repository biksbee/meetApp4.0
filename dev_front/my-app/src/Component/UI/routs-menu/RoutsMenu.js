import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "../../../pages/Home";
import ListUsers from "../../../pages/ListUsers";
import CreateGroup from "../../../pages/CreateGroup";
import GroupHistory from "../../../pages/GroupHistory";
import Friends from "../../../pages/Friends";

function RoutsMenu(){
    return(
        <>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/list"} element={<ListUsers/>}/>
                <Route path={"/create-group"} element={<CreateGroup/>}/>
                <Route path={"/group-history"} element={<GroupHistory/>}/>
                <Route path={"/friends"} element={<Friends/>}/>
            </Routes>

        </>
    )
}
export default RoutsMenu;