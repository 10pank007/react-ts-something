import React, {FC, PropsWithChildren, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidate} from "../validates";
import {ICar} from "../interfaces";
import {useAppDispatch, useAppSelector} from "../hooks";
import {carAction} from "../redux";

interface IProps extends PropsWithChildren {
}

const CarForm: FC<IProps> = () => {
    const {reset,
    register,
    handleSubmit,
    formState: {errors, isValid},
    setValue} = useForm<ICar>({mode: "all", resolver: joiResolver(carValidate)});

    const dispatch = useAppDispatch();
    const {carForUpdate} = useAppSelector(state => state.cars);

    useEffect(() => {
        if(carForUpdate) {
            setValue("brand", carForUpdate.brand, {shouldValidate: true})
            setValue("price", carForUpdate.price, {shouldValidate: true})
            setValue("year", carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue]);
    const save: SubmitHandler<ICar> = async (car) => {
        dispatch(carAction.create({car}));
        reset();
    }

    const update: SubmitHandler<ICar> = async (car) => {
        await dispatch(carAction.upDateById({id: carForUpdate.id, car}));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(carForUpdate? update: save)}>
            <input type={"text"} placeholder={"brand"} {...register("brand")}/>
            <input type={"text"} placeholder={"price"} {...register("price" , {valueAsNumber: true})}/>
            <input type={"text"} placeholder={"year"} {...register("year" , {valueAsNumber: true})}/>
            <button disabled={!isValid}>{carForUpdate? "update": "save"}</button>
            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}

            </form>
    );
};

export {CarForm};