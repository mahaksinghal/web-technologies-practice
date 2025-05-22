import React from "react";

export default function NameList(props) {
    return (
        <div>
            <h1>List of User Names</h1>
            <ul>
                {props.arr.map((name, index)=>
                    <li key={index}>{name}</li>
                )}
            </ul>
        </div>
    )
}