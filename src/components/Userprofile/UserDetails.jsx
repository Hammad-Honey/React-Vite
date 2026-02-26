import { useEffect, useState } from "react";

function UserDetails({ person, height, weight}) {

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


    return (
        <>

            <p> Full name {person.name}</p>
            <p> Age {person.age}</p>
            <p> Height {height}</p>
            <p> Weight {weight}</p>
            {isOverWeight ? <>you are overweight</> : <>You are not overweight</>}
        </>
    )

}

export default UserDetails;