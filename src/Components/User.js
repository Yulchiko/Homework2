const User  = ({user:{id, name, surname, email},  getUserById}) => {

    return(
        <div>
            {id} - {name} {surname} - {email}
            <button onClick= {() => getUserById(id)}>Click</button>
        </div>
    );

}

export default User;
