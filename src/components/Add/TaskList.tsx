import React, { useState } from 'react';

interface EnumList {
    name: string;
    done: number;
};

interface Props {
    list: Array<EnumList>;
};

export default function TaskList(props: Props) {
    const { list } = props;
    // const [tasks, setTasks] = useState(list);

    return (
        <ul className="list">
            {list.map((item) => {
                return <li key={item.name}>
                    {item.name}
                    <button className={item.done === 1 ? "done-button done" : "done-button"}></button>
                </li>
            })}
        </ul>
    )
}
