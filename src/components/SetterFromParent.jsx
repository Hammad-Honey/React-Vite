import React, { useState } from "react"
import SetterToParent from './SetterToParent'

function SetterFromParent() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prev) => prev + 1);
    }

    return (
        <>
            <SetterToParent increment={handleIncrement} />
            <>{count}</>


            <SetterToParent increment={() => setCount((prev) => prev + 1)} />
            <>{count}</>

            
        </>

    )
}
export default SetterFromParent

//if you move to multiline argumnets use return to make your method work