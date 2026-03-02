import { createContext, useContext, useState } from "react";

const UserContext=createContext(null);

// provider of the context.
export const UserProvider = ({children}) => {
    const [someData, setSomeData] = useState("Dummy string");
    const [user, setUser] = useState('')


    return(
    <UserContext.Provider value={{someData, setSomeData, user, setUser}}>
        {children}
    </UserContext.Provider>)
}
// custom hook of the Context.
export const useUserData = () => useContext(UserContext);