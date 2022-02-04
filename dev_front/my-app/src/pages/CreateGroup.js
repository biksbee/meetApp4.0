import React from "react";
import ButtonUsr from "../Component/UI/button/ButtonUsr";
import './style_page.css';

function CreateGroup(){

    return(
        <>
            <ButtonUsr />
            <div className={"page"}>
                <button className="mt-lg-5">Create group</button>
            </div>
        </>
    )
}

export default CreateGroup;