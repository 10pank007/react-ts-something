import React, {useEffect, useState} from 'react';
import {IUser} from "../../../interfaces/userInterface";
import {userService} from "../../../services/userService";
import {User} from "../User/User";
import {UserDetails} from "../UserDetails/UserDetails";

const Users = () => {
    let [users, setUsers] = useState<IUser[]>([]);
    let [userDetails, setUserDetails] = useState<IUser>(null)
    useEffect(()=>{
        userService.getAll().then(value => setUsers(value.data))
    }, []);

    const click = async (userId:number):Promise<void> => {
        let {data}= await userService.getById(userId);
        setUserDetails(data);
    }

    return (
        <div>
            {userDetails && <UserDetails userDetails={userDetails}/>}
            {users.map(user => <User key={user.id} user={user} click={click}/>)}
        </div>
    );
};

export {Users};