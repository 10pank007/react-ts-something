import React, {useState} from 'react';

import {Cars} from "../components/CarsContainer/Cars";
import {CarForm} from "../components/CarsContainer/CarForm";
import {ICar} from "../interfeces/carInterfaces";
import {Outlet} from "react-router-dom";

const CarsPage = () => {
    let[flag, setFlag] = useState<boolean>(null);
    let[carForUpdate, setCarForUpdate] = useState<ICar>(null)

    const trigger = ():void => {
        setFlag(prevState => !prevState);
    }
    return (
        <div>
            <CarForm trigger={trigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <div style={{display: "flex", justifyContent:"space-between"}}>
                <Cars flag={flag} setCarForUpdate={setCarForUpdate} trigger={trigger}/>
                <Outlet/>
            </div>

        </div>
    );
};

export {CarsPage};