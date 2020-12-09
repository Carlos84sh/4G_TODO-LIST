import React, { useState, useEffect } from "react";


 export default function(props) {
    console.log(props)
    
    return (
                
                <main>
                    <h1>Esto es una todo List</h1>
                    {props.pepito}
                    <hr></hr>
                    {props.pepito.map((value) =>(<li>{value}</li>))}
                    <hr></hr>
                    {props.children}
                    <hr></hr>
                    {props.children[0]}
                    <hr></hr>
                    {props.children[1]}
                </main>
               
                          
    )
}

