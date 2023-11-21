import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IRes} from "../types/resType";
import {ICar} from "../interfaces/carInterface";
import {IPagination} from "../interfaces/paginationInteface";

const carService = {
    getAll: (): IRes<IPagination<ICar>> => apiService.get(urls.cars),
    create: (data: ICar): IRes<ICar> => apiService.post(urls.cars, data)
}

export {carService}