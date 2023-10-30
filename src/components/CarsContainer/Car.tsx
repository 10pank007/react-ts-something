import React, {FC} from 'react';
import {ICar} from "../../interfeces/carInterfaces";
import {ISetState} from "../../types/ISetState";
import {useNavigate} from "react-router-dom";
import {carService} from "../../services/carService";

interface IProps {
    car: ICar,
    setCarForUpdate: ISetState<ICar>,
    trigger: () => void
}


const Car: FC<IProps> = ({car, setCarForUpdate, trigger}) => {
    let {id, year, price, brand} = car;

    const del = async ()=> {
        await carService.deleteById(id);
        trigger();
    }
    let navigate = useNavigate();
    return (
        <div style={{border: "1px solid black", margin: '5px 0'}}>
            <div>id: {id}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <div>brand: {brand}</div>
            <button onClick={() => setCarForUpdate(car)}>update</button>
            <button onClick={()=> del()}>delete</button>
            <button onClick={() => navigate("select", {state: car})}>select</button>
        </div>
    );
};

export {Car};