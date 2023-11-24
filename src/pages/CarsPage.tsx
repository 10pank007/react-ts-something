import React, {FC, PropsWithChildren} from 'react';
import {Cars} from "../components/CarsContainer/Cars";

interface IProps extends PropsWithChildren {
}

const CarsPage: FC<IProps> = () => {


    return (
        <div>
            <Cars/>
        </div>
    );
};

export {CarsPage};