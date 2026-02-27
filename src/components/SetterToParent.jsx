import React from "react"
function SetterToParent({increment}){
    return(
        <>
        <button onClick={increment}>Icrement Counter</button>
        </>
    )
}
export default SetterToParent