import { use, useState } from "react";
import UserDetails from "./UserDetails";



function User() {
    const [showDetails, setShowDetails] = useState(false);
    const [userHeight, setHeight] = useState(0);
    const [userWeight, setWeight] = useState(0);

    const handleHeightIncrement=()=> setHeight(userHeight+1);
    const onHeightReset=()=> setHeight(0);
    const onWeightReset=()=> setWeight(0);
    const handleWeightIncrement=()=> setWeight(userWeight+1);
    return (
        <>
            {/* Condition for show User*/}
            <div><button onClick={()=>setShowDetails(!showDetails)}>Show User Details</button></div>
            {showDetails ? 
            <>
                <UserDetails person={{name:"X", age:30}} height={userHeight} weight={userWeight} setHeight={setHeight} setWeight={setWeight}/>
            </>:<>
                <div>User Details Are hidden</div>
            </>}

            {/* Condition for show height*/}
            {/* <button onClick={() => setShowDetails(!showDetails)} >Toggle show details</button>
            {showDetails ?
                <UserDetails person={{ name: "Hammad", age: 26, height: { userHeight }, weight: { userWeight } }} />
                :
                <UserHeight />
            } */}




            {/* Condition for show weight*/}
            {/* <button onClick={() => setShowDetails(!showDetails)} >Toggle show details</button> */}
            {/* {showDetails ?
                <UserDetails person={{ name: "Hammad", age: 26, height: { userHeight }, weight: { userWeight } }} />
                :
                <UserHeight />
            } */}
            {/* <UserDetails onHeightIncrement={handleHeightIncrement} />;
            <UserDetails onHeightReset={handleHeightReset} />;
            <UserDetails onWeightIncrement={handleWeightIncrement} />;
            <UserDetails onWeightReset={handleWeightReset} />; */}


        </>


    )



}

export default User;