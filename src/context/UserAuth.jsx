import { createContext,useContext,useState } from "react";

const AuthContext=createContext();

export function AuthProvider({children}){
    const [user,setUser]=useState(null);

    const login=(logInData)=>setUser(logInData);

    const logout=()=>setUser(null);

    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
// Creating Custom Hook;
export function useAuth(){
    const context=useContext(AuthContext);
    if(!context){
        throw new Error("Use Auth must be inside provider");
    }
    return context;
}