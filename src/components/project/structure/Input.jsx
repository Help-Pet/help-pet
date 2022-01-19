import React from "react";

import "../styles/Input.module.css";

export default function Input({text, type, name, value, placeH, required}){
    return(
        <label>
            <span>{text}</span>
            <input type={type} name={name} id={name} placeholder={placeH} required/>
        </label>
    );
}