// Examples and Ways to use 'useEffect' in React

import React, { use, useEffect, useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);


    return <button onClick={() => setCount(count + 1)}>{count}</button>
}

// React Counter Problem in Action

export function CounterProblem() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        // PROBLEM: Without using prev, all updates use the stale value
        setCount(count + 1);  // Uses current count (0) → schedules 1
        setCount(count + 1);  // Still uses 0 → schedules 1
        setCount(count + 1);  // Still uses 0 → schedules 1
        // Result after re-render: count = 1 (not 3)
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment 3 times</button>
        </div>
    );
}


//Objects in Use State (You may delete full object accidently ...obj, key:value to change ) setuser(prev=>({...prev,firstName:"Nagma"}))
export function ObjectsUseState() {
    const [user, setuser] = useState({
        firstName: 'Hammad',
        age: 30
    });
    console.log(user);

    return (
        <>
            <p>{user ? <>Name = {user.firstName} / Age = {user.age}</> : <>Nothing Exist</>}</p>
            <button onClick={() => setuser({ firstName: "ALi" })}>Change User</button> {/*This will change the whole obj user now it has only one item*/}
            <button onClick={() => setuser(prev => ({ ...prev, firstName: "Nagma" }))}>Change User without removing old object</button>

        </>

    )

}

