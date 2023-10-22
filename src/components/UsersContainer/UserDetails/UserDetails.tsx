import React, {FC} from 'react';
import {IUser} from "../../../interfaces/userInterface";

interface IProps {
    userDetails: IUser,
}
const UserDetails :FC<IProps>= ({userDetails}) => {
    let {id, phone, username,name, address:{city}} = userDetails;
    return (
        <div>
            <div>id: {id}</div>
            <div>phone: {phone}</div>
            <div>username: {username}</div>
            <div>name: {name}</div>
            <div>city: {city}</div>
        </div>
    );
};

export {UserDetails};