import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./leyouts/MainLayout";
import {HomePage} from "./pages/HomePage";
import {CarsPage} from "./pages/CarsPage";
import {SelectedCarPage} from "./pages/SelectedCarPage";

let router = createBrowserRouter([
    {path: "/", element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'home'}/>},
            {path: 'home', element: <HomePage/>},
            {path: 'cars', element: <CarsPage/>, children: [
                    {path: 'select', element: <SelectedCarPage/>}
                ]},

        ]}
]);

export {router}