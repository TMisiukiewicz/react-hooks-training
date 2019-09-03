import React, { useState, useEffect } from 'react';
import useFormInput from '../CustomHooks/FormInput';
import TaskList from './TaskList';

function AddToList() {
    const item = useFormInput('');
    const [list, setList]: any[] = useState([]);

    useEffect(() => {
        console.log('List updated!');
    }, [list]); 

    const addItemToList = () => {
        const newList = [...list, {name: item.value, done: 0}];
        setList(newList);
    }

    return (
        <div>
            <input {...item} />
            <div className="addButton">
                <button onClick={addItemToList}>Add</button>
            </div>
            <TaskList list={list}/>
        </div>
    )
}

export default AddToList;
