import {IRes} from "../types/IResType";
import {ICar} from "../interfeces/carInterfaces";
import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const carService = {
    getAll: ():IRes<ICar[]> => axiosService.get(urls.cars.base),
    create: (date: ICar):IRes<ICar> => axiosService.post(urls.cars.base, date),
    upDateById: (id:number, data:ICar): IRes<ICar> => axiosService.put(urls.cars.byId(id), data),
    deleteById: (id:number): IRes<void> => axiosService.delete(urls.cars.byId(id))
}

export {carService}