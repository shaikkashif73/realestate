import { useState } from 'react'
import ChildComponent from './ChildComponent'
import './ParentComponent.css'

const ParentComponent = () => {
   const [childData, setChildData] = useState("No Data");

   const parentFunction = (dataByChild) => {
    setChildData(dataByChild)
   }

    return (
        <div className='parent-component'>
            <h1>Parent Component</h1>
            <p>Receive Data from child: {childData} </p>
            <ChildComponent parentFunction={parentFunction}/>
        </div>
    )
}

export default ParentComponent
