// Examples and Ways to use 'useEffect' in React

import React, { use, useState } from "react";

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

// React Counter Problem Solution in Action

export function CounterProblemFixed() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        // FIX: Using prev ensures we get the latest state
        setCount(prev => prev + 1);  // prev = 0 → returns 1
        setCount(prev => prev + 1);  // prev = 1 → returns 2
        setCount(prev => prev + 1);  // prev = 2 → returns 3
        // Result after re-render: count = 3
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
    
    return(
        <>
        <p>{user? <>Name = {user.firstName} / Age = {user.age}</>:<>Nothing Exist</>}</p>
        <button onClick={()=>setuser({firstName:"ALi"})}>Change User</button> {/*This will change the whole obj user now it has only one item*/}
        <button onClick={()=>setuser(prev=>({...prev,firstName:"Nagma"}))}>Change User without removing old object</button> 

        </>
        
    )

}

//Arrays in Use State (You may delete full object accidently ...obj, key:value to change ) setuser(prev=>({...prev,firstName:"Nagma"}))

export function ArrayUseState() {
    const [Items, setItems] = useState(['apple','tomato','orange']);
    // You can't do push here 
    // console.log(Items); 
    // setItems.push("Banana");
    // console.log(Items);

    //Use spread

    setItems(prev=>[...prev,'Banana']) // we are just spreading old items and merging new item
    console.log(Items)
    
    // return(
    //     <>
    //     <p>{user? <>Name = {user.firstName} / Age = {user.age}</>:<>Nothing Exist</>}</p>
    //     <button onClick={()=>setuser({firstName:"ALi"})}>Change User</button> {/*This will change the whole obj user now it has only one item*/}
    //     <button onClick={()=>setuser(prev=>({...prev,firstName:"Nagma"}))}>Change User without removing old object</button> 

    //     </>
        
    // )

}