import { useState } from 'react'
import './ChildComponent.css'

const ChildComponent = ({parentFunction}) => {
    const [data, setData] = useState('No Data')

    const sendDataToParent = () => {
        parentFunction(data);
    }
    return (
        <div className='child-component'>
            <h1>Child-Component</h1>
            <p>Change event Data: {data} </p>
            <input type="text" value={data}
                onChange={(e) => setData(e.target.value)}
            />
            <button onClick={sendDataToParent}>Send Data</button>
        </div>

    )
}
export default ChildComponent