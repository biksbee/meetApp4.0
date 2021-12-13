import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import Header from "./Component/header";

function App() {
    const voskl = (i) => console.log(i + "!");
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/meetAppBd')
            .then(res => res.json())
            .then(res => setData(res))
    }, []);
    return (
        <Header />

    );
}

export default App;
