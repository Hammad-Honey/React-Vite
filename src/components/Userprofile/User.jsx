import UserDetails from "./UserDetails";
const height="170cm"
function User() {
    return (
        <>
            <UserDetails person={{ name: "Hammad", age: 26 }} height={height} />
          
        </>

    )



}

export default User;