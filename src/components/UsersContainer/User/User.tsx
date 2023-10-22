import React, {FC} from 'react';
import {IUser} from "../../../interfaces/userInterface";

interface IProps {
    user: IUser,
    click: (id:number) => Promise<void>
}
const User:FC<IProps> = ({user, click}) => {
    let{id, name, username, email, phone} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>phone: {phone}</div>
            <button onClick={()=> click(id)}>details</button>
        </div>
    );
};

export {User};