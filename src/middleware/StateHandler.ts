import { State } from "./State";
import React from "react";
import { Action } from "./Actions";

export const reducer = (state: State, action: Action) => {
    if(action.type == "UPDATE_USER"){
        return {...state, user: action.payload}
    }
    return {...state}
};
