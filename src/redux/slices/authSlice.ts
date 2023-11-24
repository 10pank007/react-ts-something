import {createAsyncThunk, createSlice, isFulfilled, isRejected} from "@reduxjs/toolkit";
import {IUser} from "../../interfaces/userInterface";
import {IAuth} from "../../interfaces/authInterface";
import {authService} from "../../services/authService";

interface IState {
    me: IUser,
    errors: boolean

}

const initialState: IState = {
    me: null,
    errors: null
}

const login = createAsyncThunk<IUser, {user: IAuth}>(
    "authSlice/login",
    async ({user}, {rejectWithValue}) => {
        try {
            return await authService.login(user)
        } catch (e) {
            return rejectWithValue(e)
        }

    }
);

const me = createAsyncThunk<IUser, void>(
    "authSlice/me",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await authService.me();
            return data;
        } catch (e) {
            return rejectWithValue(e);
        }
    }
)

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.me = action.payload;
            })
            .addCase(me.fulfilled, (state, action) => {
                state.me = action.payload;
            })
            .addMatcher(isRejected(login), (state, action) => {
                state.errors = true;
            })
            .addMatcher(isFulfilled(login), state => {
                state.errors = false;
            })

});

const {reducer: authReducer, actions} = authSlice;
const authActions = {
    ...actions,
    login,
    me
}

export {authReducer, authActions}