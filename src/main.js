import React from "react";
import ReactDOM from "react-dom";

import "bootstrap";
import "./style.css"

import Home from "./components/home.js"
import Navbar from "./components/navbar.js"

const array =[1,4,3];

const container = document.querySelector("#app");
const component = (<Home title="Soy un titulo" pepito={array}>
                        <Navbar />
                        <h1>Hijo</h1>
                        <ul>
                            <li>Carlos</li>
                            <li>pedro</li>

                        </ul>
                    </Home>
    
);

ReactDOM.render(component,container);

