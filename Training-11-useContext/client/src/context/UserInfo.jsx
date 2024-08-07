import UserContext from "./UserContext"

const UserInfo = ({children}) => {
    const user = {
        name:"john",
        email:"john@gmail.com",
        age: 30
      }
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )

}

export default UserInfo