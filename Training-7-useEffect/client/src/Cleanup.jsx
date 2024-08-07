import { useState, useEffect } from 'react'

const Cleanup = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // console.log("Cleaning the mess of useEffect")
        // console.log("Counter : " + count)
        // setCount(0);

        const clicker = () => {
            console.log("Clicker function called")
        }

        document.body.addEventListener("click", clicker)

        return () => {
            document.body.removeEventListener("click", clicker)
        }


    }, [count])


    return (
        <>
            <h1> Cleanup </h1>
            <h2> {count} </h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>

        </>

    )

}
export default Cleanup