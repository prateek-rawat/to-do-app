import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import addButton from "../../images/add-button.png"


const Structure = (props) => {

    const inputTextHandler = (e) => {
        props.setInputValue(e.target.value)
    };

    const submitEventHandler = (e) => {
        e.preventDefault()
        props.setToDos([...props.toDos, { text: props.inputValue, completed: false, id: uuidv4() }])
        props.setInputValue("")
    };

    return (
        <div className="input-add-div">
            <input type="text" className="user-input" value={props.inputValue} onChange={inputTextHandler} /> <input className="add-button" type="image" src= {addButton} onClick={props.inputValue ? submitEventHandler : null} />
        </div>
    )
};

export default Structure;