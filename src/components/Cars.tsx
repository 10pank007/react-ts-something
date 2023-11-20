import React, {FC, PropsWithChildren, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {Car} from "./Car";
import {carAction} from "../redux";

interface IProps extends PropsWithChildren {
}

const Cars: FC<IProps> = () => {
    const {cars, trigger} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carAction.getAll())
    }, [dispatch, trigger]);
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};