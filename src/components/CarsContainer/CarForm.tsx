import { FC, useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfeces/carInterfaces";
import {carValidator} from "../../validators/carValidator";
import {joiResolver} from "@hookform/resolvers/joi";
import {carService} from "../../services/carService";
import {ISetState} from "../../types/ISetState";

interface IProps {
    trigger: ()=> void,
    carForUpdate: ICar,
    setCarForUpdate: ISetState<ICar>
}
const CarForm: FC<IProps> = ({trigger, carForUpdate, setCarForUpdate}) => {
    let{reset,
        register,
        handleSubmit,
        setValue,
    formState: {errors, isValid}} = useForm<ICar>({
        mode: "onBlur", resolver: joiResolver(carValidator)
    })

    useEffect(()=>{
        if(carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true});
            setValue('price', carForUpdate.price, {shouldValidate: true});
            setValue('year', carForUpdate.year, {shouldValidate: true});
        }
    }, [carForUpdate, setValue])
    const save: SubmitHandler<ICar> = async (car)=> {
        await carService.create(car);
        trigger();
        reset();
    }

    const update: SubmitHandler<ICar> = async ( car: ICar) => {
        await carService.upDateById(carForUpdate.id, car);
        trigger();
        setCarForUpdate(null)
        reset();
    }
    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate? update: save)}>
                <input type={"text"} placeholder={"brand"} {...register("brand")}/>
                <input type={"text"} placeholder={"price"} {...register("price")}/>
                <input type={"text"} placeholder={"year"} {...register("year")}/>
                <button disabled={!isValid}>{carForUpdate? "Update" : "Save"}</button>
            </form>
            {errors.brand && <div>brand: {errors.brand.message}</div>}
            {errors.price && <div>brand: {errors.price.message}</div>}
            {errors.year && <div>brand: {errors.year.message}</div>}
        </div>

    );
};

export {CarForm};