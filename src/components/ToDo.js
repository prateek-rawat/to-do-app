import React from "react";
import completedButton from "../../images/completed-button.png";
import deletedButton from "../../images/delete-button.png";


const ToDo = (props) => {

    const onDeleteHandler = () => {
        props.setToDos(props.toDos.filter((todo) => {
            return props.item.id !== todo.id
        }))
    };

    const onCompletedHandler = () => {
        props.setToDos(props.toDos.map((itemX) => {
            if (itemX.id === props.item.id) {
                return {
                    ...itemX, completed: !itemX.completed
                };
            }

            else {
                return itemX
            };
        })
        )
    };

    return (
        <div className="list-items-div">
            <li className={`toDo-item ${props.item.completed ? "completed-toDo" : ""}`}>{props.text}</li>
            <input className="completed-button" type="image" src={completedButton} onClick={onCompletedHandler} />
            <input className="delete-button" type="image" src={deletedButton} onClick={onDeleteHandler} />
        </div>
    )
};

export default ToDo;