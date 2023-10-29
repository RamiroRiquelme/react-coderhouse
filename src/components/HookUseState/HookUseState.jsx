import { useState } from "react"

export const HookUseState = () => {
    const [Count, setCount] = useState(0);

    const handleSum = () => {
        setCount(Count + 1);
    }

    const handleRes = () => {
        if (Count == 0){
            return setCount(0)
        }
        setCount(Count - 1);
    }

    return (
        <>
        <div>{Count}</div>
        <button onClick={handleSum}>Sumar</button>
        <button onClick={handleRes}>Restar</button>
        </>
    )
}