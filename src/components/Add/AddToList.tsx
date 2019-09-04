import React, { useState, useEffect } from 'react';
import useFormInput from '../CustomHooks/FormInput';
import TaskList from './TaskList';

function AddToList() {
    const item = useFormInput('');
    const [list, setList]: any[] = useState([]);

    const addItemToList = () => {
        const newList = [...list, {name: item.value, done: 0}];
        setList(newList);
    }

    const updateItem = (index: number): void => {
        let currentList = list;
        const element = currentList[index];
        const doneStatus = element.done === 0 ? 1 : 0;
        element.done = doneStatus;
        if (index !== currentList.length - 1 && doneStatus === 1) {
            currentList.splice(index, 1);
            currentList.push(element);
        } else if (index !== 0 && doneStatus === 0) {
            currentList.splice(index, 1);
            currentList.splice(0, 0, element);            
        }
        setList([...currentList]);
    }

    return (
        <div>
            <input {...item} />
            <div className="addButton">
                <button onClick={addItemToList}>Add</button>
            </div>
            <TaskList list={list} onStatusChange={(index: number) => updateItem(index)}/>
        </div>
    )
}

export default AddToList;
