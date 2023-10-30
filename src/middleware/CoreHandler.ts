import { act } from "@testing-library/react";
import { mapHandler } from "../core/map/MapHandler";
import { userAuth } from "../core/user/userAuth";
import { Action } from "./Actions";

export const executeCore = (action: Action,  email?: string, password?: string) => {
    if(action.type === "LOGIN") {
        userAuth.login();
    }
    if(action.type === 'LOGOUT') {
        userAuth.logout();
    }
    if(action.type ==='MAIL_LOGIN')
    {   email = action.payload.email;
        password = action.payload.password;
        if (email && password) {
            userAuth.loginWithEmailAndPassword(email, password);
          } 
    }
    if(action.type === "START_MAP") {
        const { user, container } = action.payload;
        mapHandler.start(container);
    }
    if(action.type === "REMOVE_MAP") {
        mapHandler.remove();
    }

    if(action.type === "ADD_BUILDING") {
        mapHandler.addBuilding(action.payload);
    }
}