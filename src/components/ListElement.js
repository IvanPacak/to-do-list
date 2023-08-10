import React from "react";
import "../style/ListElement.css";

export default function ListElement(props){
    return(   
        <li className="task-list-item">
            <label className="task-list-item-label">
                <input onChange={props.handleCheckboxClick} id={props.id} className="task-list-item-input" type="checkbox" />
                <span style={{textDecoration: props.completed ? 'line-through rgba(255, 255, 255, 0.8)' : 'none'}} >{props.task}</span>
            </label>
            <span onClick={props.handleDeleteClick} id={props.id} className="delete-btn" title="Delete Task"></span>
        </li>
    )
}