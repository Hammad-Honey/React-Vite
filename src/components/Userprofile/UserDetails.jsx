function UserDetails({ person, height }) {

    return (
        <>
            <p draggable={true}
                onDragStart={e => console.log('onDragStart')}
                onDragEnd={e => console.log('onDragEnd')}> Full name {person.name}</p>
            <p> Age {person.age}</p>
            <p> Height {height}</p>
        </>
    )

}

export default UserDetails;