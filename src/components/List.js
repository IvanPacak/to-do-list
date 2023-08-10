import React, {useState, useEffect} from "react";
import '../style/List.css';
import ListElement from "./ListElement";

export default function List(){
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const addNewItem = e => {
        e.preventDefault();
        if(value !== ""){
            const todoData = {
                task: value,
                id: new Date().getTime(),
                completed: false
            };

            setItems(prevItems => [...prevItems].concat(todoData));
        }
        else
            return
    }

    const getInputValue = e => {
        setValue(e.target.value);
    }

    const deleteItem = e => {
        setItems([...items].filter(item => item.id !== Number(e.target.id)));
    }

    const changeCheckboxValue = e => {
        const updateCheckbox = items.map(item => {
            if(Number(e.target.id) === item.id){
                item.completed = !item.completed
            }
            return item
        })

        setItems(updateCheckbox);
    }

    useEffect(() => {
        const getData = JSON.parse(localStorage.getItem('tasks'));
        if(getData){
            setItems(getData)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(items))
    }, [items])

    const listItems = items.map(item => 
        <ListElement 
            handleCheckboxClick={changeCheckboxValue}  
            handleDeleteClick={deleteItem} 
            completed={item.completed}
            task={item.task} 
            id={item.id} 
            key={item.id} 
        />
    )

    return(
        <div className="list-element">
            <h1 className="list-title">TO DO LIST</h1>
            <form onSubmit={addNewItem} className="list-submit">
                <input onChange={getInputValue} placeholder="Add Task" autoComplete="off" type="text" className="input-element"/>
                <button className="add-element"></button>
            </form>
            {listItems}
        </div>
    )
}