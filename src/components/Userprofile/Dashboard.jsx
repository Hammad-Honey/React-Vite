import { userContext } from "../../context/userContext";
import { useContext } from "react";

export default function Dashboard(){
    const user=useContext(userContext);


    return(
        <>
        <p>Welcome Mr./Mrs {user} </p>
        </>
    );
}