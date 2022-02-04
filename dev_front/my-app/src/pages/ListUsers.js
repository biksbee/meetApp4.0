import React, {useEffect, useState} from "react";
import ButtonUsr from "../Component/UI/button/ButtonUsr";
import PostList from "../Component/PostList";

function ListUsers(){
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/showUsers')
            .then(res => res.json())
            .then(res => setData(res))
    }, []);


    return(
        <>
            <ButtonUsr />
            <div className="App">
                <header className="App-header">
                    <div className="App-showAll">
                        <PostList posts={data} />
                    </div>
                </header>
            </div>
        </>
    )

}

export default ListUsers;