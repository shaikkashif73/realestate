import { useState, useEffect } from 'react'

const Counter = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    console.log("Render Out-1");

    useEffect(() => {
        console.log("useEffect called ")
    },[count1])

    console.log("Render Out-2");

    console.log("Render Out-3");

    return (
        <>
            <h1> Counter</h1>
            <h2>{count1}</h2>
            <button onClick={() => setCount1(count1 + 1)}>Increment</button>

            <h2>{count2}</h2>
            <button onClick={() => setCount2(count2 + 1)}>Increment</button>
        </>


    )

}
export default Counter