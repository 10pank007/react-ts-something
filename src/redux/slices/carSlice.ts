import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {ICar} from "../../interfaces";
import {AxiosError} from "axios";
import {carService} from "../../services";


interface IState {
    cars: ICar[],
    trigger: boolean,
    carForUpdate: ICar,

}

const initialState: IState = {
    cars: [],
    trigger: null,
    carForUpdate: null
};

const getAll = createAsyncThunk<ICar[], void>(
    "carSlice/getAll",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data)
        }

    });

const create = createAsyncThunk<void, {car: ICar}>(
    "carSlice/create",
    async ({car}, {rejectWithValue}) => {
        try {
            await carService.create(car);
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data)
        }
    }
);

const upDateById = createAsyncThunk<void, {id: number, car: ICar}>(
    "carSlice/upDateById",
    async ({id, car}, {rejectWithValue}) => {
        try {
            await carService.upDate(id, car);
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data)
        }
    }
);

const deleteById = createAsyncThunk<void, {id: number}>(
    "carSlice/deleteById",
    async ({id}, {rejectWithValue}) => {
        try {
            await carService.deleteById(id);
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data)
        }

    }
)
const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate:(state, action) => {
            state.carForUpdate = action.payload.carForUpdate;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addCase(upDateById.fulfilled, (state, action) => {
                state.carForUpdate = null;
            })
            .addMatcher(isFulfilled(create, upDateById, deleteById), state => {
                state.trigger = !state.trigger;
            })
    }
});

const {reducer: carReducer, actions} = carSlice;
const carAction = {
    ...actions,
    getAll,
    create,
    upDateById,
    deleteById
}

export { carReducer, carAction}
