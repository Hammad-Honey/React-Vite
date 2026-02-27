//Arrays in Use State (You may delete full object accidently ...obj, key:value to change ) setuser(prev=>({...prev,firstName:"Nagma"}))

import { useEffect, useState } from "react";

const ArrayUseState = () => {
    const [items, setItems] = useState(['apple', 'tomato', 'orange']);
    // You can't do push here 
    // console.log(Items); 
    // setItems.push("Banana");
    // console.log(Items);

    useEffect(() => {
        console.log(items)
    }, [items])

    //Use spread to add before or after an array

    const addBanana = () => {
        setItems(prev => [...prev, 'Banana']) // we are just spreading old items and merging new item ('banana',...prev)
    }

    return (
        <>
            {/* <p>{user? <>Name = {user.firstName} / Age = {user.age}</>:<>Nothing Exist</>}</p>
        <button onClick={()=>setuser({firstName:"ALi"})}>Change User</button> 
        <button onClick={()=>setuser(prev=>({...prev,firstName:"Nagma"}))}>Change User without removing old object</button>  */}

            <button onClick={addBanana}>Add Banana</button>
            <button onClick={() =>  
                setItems(
                    (prev) => ["New Banana", ...prev]
                ) 

            }>Add new banana</button>

        </>

    )

}

export default ArrayUseState;