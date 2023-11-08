import React, { FC, PropsWithChildren, useReducer, createContext, useContext, Dispatch } from "react";
import { reducer } from "./StateHandler";
import { State, initialState } from "./State";
import { Action, ActionList } from "./Actions";
import { executeCore } from "./CoreHandler";
import { Authenticator } from "./Authenticator";
import { Events } from "./Events";

const appContext = createContext<[State, Dispatch<Action>]>([
    initialState,
    () => {},
]);

export const ContextProvider: FC<PropsWithChildren> = ({children}) => {
    const [state, setState] = useReducer(reducer, initialState);

    const events = new Events();
    for(const type of ActionList){
        events.on(type, (payload: any) => {
            setState({type, payload});
        });
    };

    const dispatch = (
        value: Action, 
    ) => {
        setState(value);
        executeCore(value, events);
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
