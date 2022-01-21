import React from "react";

import "../styles/Input.module.css";

export default function Input({text, type, id, name, value, placeH}){
    return(
        <label>
            <span>{text}</span>
            <input type={type} id={id} name={name} placeholder={placeH} required/>
        </label>
    );
}