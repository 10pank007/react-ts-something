import React from 'react';
import {useAppLocation} from "../hooks/useAppLocation";
import {ICar} from "../interfeces/carInterfaces";
import {SelectedCar} from "../components/CarsContainer/SelectedCar";
import {useLocation} from "react-router-dom";


const SelectedCarPage = () => {
    let {state: {car}} = useAppLocation<{car:ICar}>();
    // let {state: car} = useLocation()
    console.log(car);
    return (
        <div>
            {car && <SelectedCar car={car}/>}
        </div>
    );
};

export {SelectedCarPage};