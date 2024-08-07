
import UserInfo from './context/UserInfo'
import './App.css'
import Dashboard from './components/Dashboard'

function App() {

  // const user = {
  //   name:"john",
  //   email:"john@gmail.com",
  //   age: 30
  // }

  return (
    <UserInfo>
      <Dashboard  />
    </UserInfo>
  )
}

export default App
