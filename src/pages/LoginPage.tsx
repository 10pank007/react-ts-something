import React, {FC, PropsWithChildren} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuth} from "../interfaces/authInterface";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {authActions} from "../redux/slices/authSlice";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
}

const LoginPage: FC<IProps> = () => {
    const {register, handleSubmit} = useForm<IAuth>();
    const {errors} = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const login: SubmitHandler<IAuth> = async (user) => {
        const {meta: {requestStatus}} = await dispatch(authActions.login({user}));
        if (requestStatus === "fulfilled") {
            navigate("/cars")
        }
    };

    return (
        <form onSubmit={handleSubmit(login)}>
            <input type={"text"} placeholder={"username"} {...register("username")}/>
            <input type={"text"} placeholder={"password"} {...register("password")}/>
            <button>Login</button>
            {errors && <div>username or password is incorrect</div>}

        </form>
    );
};

export {LoginPage};