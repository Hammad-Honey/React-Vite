import { use, useState } from "react";
import UserDetails from "./UserDetails";


function User() {
    const [showDetails, setShowDetails] = useState(false);
    const [userHeight, setHeight] = useState(0);
    const [userWeight, setWeight] = useState(0);

    const incrementHeightByTen = () => {
        setHeight((prev) => prev + 10)
    }

    const incrementWeightByTen = () => {
        setWeight((prev) => prev + 10)
    }

    // deep copy shallow copy, state update ways in react, spread operator in arrays and objects. 
    //  how to pass a callback for example a setter in the props.

    return (
        <>
            {/* <button onClick={() => setShowDetails(!showDetails)} >Toggle show details</button>
            {showDetails ?
                <UserDetails person={{ name: "Hammad", age: 26, height: { userHeight }, weight: { userWeight } }} />
                :
                <UserHeight />
            }

            <button onClick={() => setShowDetails(!showDetails)} >Toggle show details</button>
            {showDetails ?
                <UserDetails person={{ name: "Hammad", age: 26, height: { userHeight }, weight: { userWeight } }} />
                :
                <UserHeight />
            } */}




            {/* Condition for show weight*/}
            <button onClick={() => setShowDetails(!showDetails)} >Toggle show details</button>
            {showDetails ?
                <>
                    <button onClick={incrementWeightByTen}>Increment weight by 10</button>
                    <button onClick={() => setWeight(0)}>reset weight</button>
                    <button onClick={incrementHeightByTen}>Increment height by 10</button>
                    <button onClick={() => setHeight(0)}>reset Height</button>
                    <UserDetails person={{ name: "Hammad", age: 26}} height={userHeight} weight={userWeight}   />

                </>
                :
                <></>
            }


        </>


    )
}

export default User;