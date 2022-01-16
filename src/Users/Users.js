import {useEffect, useState} from "react";
import React from "react";

import UserDetals from "../    UserDetals/UserDetals";
import Posts from "../Posts/Posts";
import {userService} from "../Services/User.service";
import  User from "../Components/User"
import "./IdUser.css"

const Users = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [userPosts, setUserPosts] = useState([]);




    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value));
    }, []);

    const getUserById = (id) => {
        userService.getById(id)
            .then(value => {
                setUser(value);
                setUserPosts([]);
            });
    };

    const getUserPosts = (id) => {
        userService.getCommentsById(id)
            .then(value => setUserPosts(value));
    };
return(
    <div className="IdUsers">
        {users.map(user =><User key={user.id}user={user}getUserById={getUserById}/>)}
    {user && (<UserDetals user={user} getUserPosts={getUserPosts}/>)}
        <div>{userPosts.map(post => <Posts key={post.id} post={post}/>)}</div>
</div>
    )
}
export default Users;