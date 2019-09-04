import React, { useEffect } from 'react';

interface EnumList {
    name: string;
    done: number;
};

interface Props {
    list: Array<EnumList>;
    onStatusChange?: any;
};

export default function TaskList(props: Props) {
    const { list, onStatusChange } = props;

    return (
        <ul className="list">
            {list.map((item, index) => {
                return <li key={item.name} className={item.done === 1 ? 'task-done' : ''}>
                    {item.name}
                    <button className={item.done === 1 ? "done-button done" : "done-button"} onClick={() => onStatusChange(index)}></button>
                </li>
            })}
        </ul>
    )
}
