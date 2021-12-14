import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import Header from "./Component/header";
function App() {
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/meetAppBd')
    //         .then(res => res.json())
    //         .then(res => setData(res))
    // }, []);

    return (
        <>
            <Header />
            {/*<div className="App">*/}
            {/*    <header className="App-header">*/}
            {/*        <div className="App-showAll">*/}
            {/*            {data.map((element) => <div>{element.name}, {element.age}</div>)}*/}
            {/*        </div>*/}
            {/*    </header>*/}
            {/*</div>*/}
        </>
    );
}

export default App;
