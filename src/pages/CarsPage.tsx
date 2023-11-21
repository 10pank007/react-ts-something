import React, {FC, PropsWithChildren, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {carActions} from "../redux/slices/carSlice";

interface IProps extends PropsWithChildren {
}

const CarsPage: FC<IProps> = () => {
    const {cars} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getAll());
    }, []);

    return (
        <div>
            {JSON.stringify(cars)}
        </div>
    );
};

export {CarsPage};