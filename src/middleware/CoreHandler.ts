import { act } from "@testing-library/react";
import { Events } from "./Events";
import { mapHandler } from "../core/map/MapHandler";
import { databaseHandler } from "../core/db/dbHandler";
import { Action } from "./Actions";

export const executeCore = (action: Action, events?: Events) => {
    if(action.type === "LOGIN") {
        databaseHandler.login();
    }
    if(action.type === 'LOGOUT') {
        databaseHandler.logout();
    }
    if(action.type ==='MAIL_LOGIN')
    {   const email = action.payload.email;
        const password = action.payload.password;
        if (email && password) {
            databaseHandler.loginWithEmailAndPassword(email, password);
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

    if(action.type === "DELETE_BUILDING") {
        databaseHandler.deleteBuilding(action.payload, events as Events);
    }

    if(action.type === "UPDATE_BUILDING") {
        mapHandler.addBuilding(action.payload);
    }
}