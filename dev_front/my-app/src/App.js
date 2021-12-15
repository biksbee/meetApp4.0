import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import Header from "./Component/header";
import Footer from "./Component/footer/footer";
import body from "./Component/body/body"

function App() {


    return (
        <>
            <Header />
            <body />
            {/*<Footer />*/}
        </>
    );
}

export default App;
