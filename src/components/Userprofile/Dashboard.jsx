import { useContext } from "react";
import { useUserData } from "../../context/userContext";

export default function Dashboard(){
  const {someData, setSomeData, user, setUser} = useUserData();


    return(
        <>
        <p>Welcome Mr./Mrs user {user}</p>
        </>
    );
}