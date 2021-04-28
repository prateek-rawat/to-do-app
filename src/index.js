import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./to-do-app.css/index.css"

//Importing components
import Structure from "./components/Structure";
import TodosList from "./components/TodosList";
import FilterToDos from "./components/FilterToDos";

const TodoApp = () => {
    const [inputValue, setInputValue] = useState("");
    const [toDos, setToDos] = useState([]);
    const [optionValue, setOptionValue] = useState("ALL")
    const [filteredToDos, setFilteredToDos] = useState([]);

    useEffect(() => {
        checklocalStorage()
    }, [])

    useEffect(() => {
        setLocalStorage()
    }, [toDos])

    const setLocalStorage = () => {
        localStorage.setItem("toDos", JSON.stringify(toDos))
    };

    const checklocalStorage = () => {
        if (localStorage.getItem("toDos") === null) {
            return undefined
        }

        else {
            const localtoDos = JSON.parse(localStorage.getItem("toDos"))
            return setToDos(localtoDos)
        }
    }


    return (

        <React.StrictMode>

        <div className="render-div">

            <div className="input-add-select-div">

                <Structure
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    toDos={toDos}
                    setToDos={setToDos}
                />

                <FilterToDos
                    toDos={toDos}
                    setToDos={setToDos}
                    optionValue={optionValue}
                    setOptionValue={setOptionValue}
                    filteredToDos={filteredToDos}
                    setFilteredToDos={setFilteredToDos}
                />

            </div>

            <TodosList
                toDos={toDos}
                setToDos={setToDos}
                filteredToDos={filteredToDos}
            />

        </div>

        </React.StrictMode>
    )

};

ReactDOM.render(<TodoApp />, document.querySelector("#root"));