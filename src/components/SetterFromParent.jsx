import React,{ useState } from "react"
import SetterToParent from './SetterToParent'

function SetterFromParent(){
    const [count,setcount]=useState(0);

    const HandleIncrement= ()=>{
        setcount(prev=>prev+1);
    }


    return(
        <>
        <SetterToParent increment={HandleIncrement}/>
        <>{count}</>
        </>
        
    )   
}
export default SetterFromParent