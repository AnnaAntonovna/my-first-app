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
    {
        if (email && password) {
            userAuth.loginWithEmailAndPassword(email, password);
          } else {
            console.error("Invalid email or password");
        }
    }
    if(action.type === "START_MAP") {
        mapHandler.start(action.payload);
    }
    if(action.type === "REMOVE_MAP") {
        mapHandler.remove();
    }
}