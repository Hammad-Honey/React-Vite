import { useAuth } from "../../context/UserAuth";

export default function Dashboard(){
  const {user,login,logout} = useAuth();


    return(
        <>
        <button onClick={()=>login("Hammad")}>Login</button>
        <button onClick={logout}>Logout</button>
        <p>Welcome {user}!</p>
        </>
    );
}