const UserDetals = (props) => {
    const {user, getUserPosts} = props;
    const {id, name, username, email} = user


return(
    <div className="Users">
        <p className="User"> {id} - {name}  {username} -  {email}</p>
        <button onClick={() => getUserPosts(user.id)}>Posts</button>
    </div>
)
}

export default UserDetals;