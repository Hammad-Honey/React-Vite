import React from "react"
import SetterFromParent from "./SetterFromParent"
function SetterToParent({increment}){
    return(
        <>
        <button onClick={increment}>Icrement Counter</button>
        </>
    )
}
export default SetterToParent