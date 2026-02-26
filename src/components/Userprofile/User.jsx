import { use, useState } from "react";
import UserDetails from "./UserDetails";


const UserHeight = () => {

    return <>This is user height </>
}

function User() {
    const [showDetails, setShowDetails] = useState(false);
    const [userHeight, setHeight] = useState(0);
    const [userWeight, setWeight] = useState(0);

    const handleHeightIncrement= ()=>{setHeight(userHeight+10)}

    return (
        <>
            {/* Condition for show User*/}
            <button onClick={() => setShowDetails(!showDetails)} >Toggle show details</button>
            {showDetails ?
                <UserDetails person={{ name: "Hammad", age: 26, height: { userHeight }, weight: { userWeight } }} />
                :
                <UserHeight />
            }

            {/* Condition for show height*/}
            <button onClick={() => setShowDetails(!showDetails)} >Toggle show details</button>
            {showDetails ?
                <UserDetails person={{ name: "Hammad", age: 26, height: { userHeight }, weight: { userWeight } }} />
                :
                <UserHeight />
            }




            {/* Condition for show weight*/}
            <button onClick={() => setShowDetails(!showDetails)} >Toggle show details</button>
            {showDetails ?
                <UserDetails person={{ name: "Hammad", age: 26, height: { userHeight }, weight: { userWeight } }} />
                :
                <UserHeight />
            }


        </>


    )
    return <Child onIncrement={handleHeightIncrement} />;
    return <Child onIncrement={handleHeightReset} />;
    return <Child onIncrement={handleWeightIncrement} />;
    return <Child onIncrement={handleWeightReset} />;


}

export default User;