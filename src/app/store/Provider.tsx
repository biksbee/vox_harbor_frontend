'use client';
import { Provider } from 'react-redux';
import { store } from './store';
import {ReactNode} from "react";

interface IProvider {
    children: ReactNode;
}

export const Providers = ({ children }: IProvider) => {
    return(
        <Provider store={store}>
            {children}
        </Provider>
    );
}