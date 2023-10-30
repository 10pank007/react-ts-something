import React, {FC, useEffect, useState} from 'react';
import {ICar} from "../../interfeces/carInterfaces";
import {carService} from "../../services/carService";
import {Car} from "./Car";
import {ISetState} from "../../types/ISetState";

interface IProps {
    flag: boolean,
    setCarForUpdate: ISetState<ICar>,
    trigger: ()=> void
}

const Cars: FC<IProps> = ({flag, setCarForUpdate, trigger}) => {
    let [cars, setCars] = useState<ICar[]>([]);

    useEffect(()=>{
        carService.getAll().then(value => setCars(value.data));
    }, [flag])
    return (
        <div style={{width: "50%"}}>
            {cars.map(value => <Car key={value.id} car={value} setCarForUpdate={setCarForUpdate} trigger={trigger}/>)}
        </div>
    );
};

export {Cars};