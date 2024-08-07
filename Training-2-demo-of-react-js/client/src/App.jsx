import './App.css'
import Demo from './Demo'
import Home from './Home'
function App() {
 
  const obj = {
    title: "React JS Course",
    duration: 3,
    language: "English"
  }
const objAddress = {
  address: "shaikpet",
  landmark: "manikonda",
  pincode: "500028"
}

   
  return (
    <>
     
     <Demo message={obj} /> 
     <Home message={objAddress}/>
  
    </>
  )
}

export default App
