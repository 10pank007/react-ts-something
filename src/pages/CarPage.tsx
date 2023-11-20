import React, {FC, PropsWithChildren} from 'react';
import {CarForm, Cars} from "../components";

interface IProps extends PropsWithChildren {
}

const CarPage: FC<IProps> = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarPage};