import React from 'react';
import {Button, ButtonGroup, Navbar} from "react-bootstrap";
import '../../../pages/style_page.css'

function ButtonUsr(){
    return(
        <Navbar
            fixed={"top"}
            className={"page"}
            collapseOnSelect
            expand={"md"}
            variant={"dark"}
        >
            <ButtonGroup aria-label="Basic example">
                <Button href={"/"} variant="secondary">Home</Button>
                <Button href={"/list"} variant="secondary">ListUsers</Button>
                <Button href={"/createGroup"} variant="secondary">Create group</Button>
                <Button href={"/"} variant="secondary">Group history</Button>
                <Button href={"/"} variant="secondary">Friends</Button>
                <Button href={"/chat"} variant="secondary">Chat</Button>
            </ButtonGroup>

        </Navbar>
    )
}

export default ButtonUsr;