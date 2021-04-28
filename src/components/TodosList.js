import React from "react";
import ToDo from "./ToDo";

const TodosList = (props) => {

    return (
        <div className="todos-div">
            <ul className="unordered-list">
            {props.filteredToDos.map((item) => {
                   return <ToDo
                   text={item.text}
                   key={item.id}
                   setToDos={props.setToDos}
                   toDos = {props.toDos}
                   item={item}
                   />
            }
                )}
            </ul>
        </div>
    )
};

export default TodosList;