import { useState } from "react"

export default function CheckboxList({list}) {
    const [isChecked, setIsChecked] = useState(false);
    console.log(isChecked)
    
    const handleChecked = () => {
        setIsChecked(!isChecked);
    };

    return (
    <div>
        <ul>
        <li>
            <input 
                type="checkbox"
                id="task1"
                checked={isChecked}
                onChange={handleChecked}
            />
            <label for="task1">Tarefa 1</label>
        </li>
        <li>
            <input type="checkbox" id="task2" value/>
            <label for="task2">Tarefa 2</label>
        </li>
            {list.map((i, index) => { 
            return (
                <li key={index}>
                    {Object.entries(i).map(([key, value], idx) => (
                        <div key={idx}>
                        {key}: <span>{value}</span>
                        </div>
                    ))}
                </li>
            )     
            })}
        </ul>
    </div>
    )
}