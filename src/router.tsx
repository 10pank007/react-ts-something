import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {CarsPage} from "./pages/CarsPage";
import {LoginPage} from "./pages/LoginPage";
import {RegisterPage} from "./pages/RegisterPage";
import {RequiredAuth} from "./hoc/RequiredAuth";

const router = createBrowserRouter([
    {path: "", element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={"cars"}/>},
            {path: "cars", element: <RequiredAuth><CarsPage/></RequiredAuth>},
            {path: "login", element: <LoginPage/>},
            {path: "register", element: <RegisterPage/>}
        ]}
]);

export {router}