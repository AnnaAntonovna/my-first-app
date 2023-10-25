import React, { FC, PropsWithChildren, useReducer, createContext, useContext, Dispatch } from "react";
import { reducer } from "./StateHandler";
import { State, initialState } from "./State";
import { Action } from "./Actions";
import { executeCore } from "./CoreHandler";
import { Authenticator } from "./Authenticator";

const appContext = createContext<[State, Dispatch<Action>]>([
    initialState,
    () => {},
]);

export const ContextProvider: FC<PropsWithChildren> = ({children}) => {
    const [state, setState] = useReducer(reducer, initialState);

    const dispatch = (
        value: Action, 
        email?: string, 
        password?: string
    ) => {
        setState(value);

        // Pass email and password to executeCore
        executeCore(value);
    };

    
    return (
    <appContext.Provider value={[state, dispatch]}>
        <Authenticator />
        {children}
    </appContext.Provider>)
};


export const useAppContext = () => {
    return useContext(appContext);
}
