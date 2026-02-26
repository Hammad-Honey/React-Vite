import { useEffect, useState } from "react";

function UserDetails({ person, height, weight, setHeight, setWeight}) {

    const [isOverWeight, setIsOverWeight] = useState(false)

    //  runs on first render
    useEffect(() => {
        console.log("I should arrive on the first render")
    }, [])

    // runs when dependency array's state changes
    useEffect(() => {
        console.log("weight", weight)
        if (weight > 90) {
            setIsOverWeight(true)
        } else {
            setIsOverWeight(false)
        }
    }, [weight,height])

    // runs before unmount, we call it a cleanup function
    useEffect(() => {
        return () => {
            console.log("I am unmounting")
        }
    }, [])

    const incrementWeightByTen = () => {
        setWeight((prev) => prev + 10)
    }



    return (
        <>
            <button onClick={Child({incrementWeightByTen})}>Increment weight by 10</button>
            <button onClick={() => setWeight(0)}>reset</button>
            <button onClick={incrementHeightByTen}>Increment weight by 10</button>
            <button onClick={() => setHeight(0)}>reset</button>
            <p> Full name {person.name}</p>
            <p> Age {person.age}</p>
            <p> Height {height}</p>
            <p> Weight {weight}</p>
            {isOverWeight ? <>you are overweight</> : <>You are not overweight</>}
        </>
    )

}

export default UserDetails;