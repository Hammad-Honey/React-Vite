function UserDetails({person, height}){

    return(
        <>
        <p> Full name {person.name}</p>
        <p> Age {person.age}</p>
        <p> Height {height}</p>
        </>
    )        

}

export default UserDetails;