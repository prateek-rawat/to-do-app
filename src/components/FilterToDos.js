import React from "react";
import { useEffect } from "react"


const FilterToDos = (props) => {

    useEffect(() => {
        onFilterChangeHandler()
    }, [props.toDos])

    useEffect(() => {
        onFilterChangeHandler()
    }, [props.optionValue])


    const optionValueHandler = (e) => {
        props.setOptionValue(e.target.value)
    }

    const onFilterChangeHandler = () => {
        if (props.optionValue === "ALL") {
            props.setFilteredToDos(props.toDos.filter((item) => {
                return true
            }))
        }

        else if (props.optionValue === "Completed") {
            props.setFilteredToDos(props.toDos.filter((item) => {
                return item.completed === true
            }))
        }

        else if (props.optionValue === "Uncompleted") {
            props.setFilteredToDos(props.toDos.filter((item) => {
                return item.completed === false
            }))
        }
    }


    return (
        <div className="select-div">
            <select className="to-do-selector" value={props.optionValue} onChange={optionValueHandler}>
                <option className="option-ALL" value={"ALL"}> ALL </option>
                <option className="option-Completed" value="Completed"> Completed </option>
                <option className="option-Uncompleted" value="Uncompleted"> Uncompleted </option>
            </select>
        </div>
    )
};

export default FilterToDos;