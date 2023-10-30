import React, {FC} from 'react';
import {ICar} from "../../interfeces/carInterfaces";


interface IProps{
    car: ICar
}

const SelectedCar: FC<IProps> = ({car}) => {
    let {id, brand, price, year} = car;
    return (
        <div>
            <div>id : {id}</div>
            <div>brand : {brand}</div>
            <div>price : {price}</div>
            <div>year : {year}</div>
        </div>
    );
};

export {SelectedCar};