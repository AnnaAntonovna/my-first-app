import { Building } from './../types';
import { act } from "@testing-library/react";
import { Events } from "./Events";
import { mapHandler } from "../core/map/MapHandler";
import { databaseHandler } from "../core/db/dbHandler";
import { Action } from "./Actions";
import { buildingHandler } from '../core/building/buildingHandler';

export const executeCore = async (action: Action, events?: Events) => {
    if(action.type === "LOGIN") {
        return databaseHandler.login();
    }
    if(action.type === 'LOGOUT') {
        return databaseHandler.logout();
    }
    if(action.type ==='MAIL_LOGIN')
    {   const email = action.payload.email;
        const password = action.payload.password;
        if (email && password) {
            return databaseHandler.loginWithEmailAndPassword(email, password);
          } 
    }
    if(action.type === "START_MAP") {
        const { user, container } = action.payload;
        return mapHandler.start(container, user, events as Events);
    }
    if(action.type === "REMOVE_MAP" || action.type === "OPEN_BUILDING") {
        return mapHandler.remove();
    }

    if(action.type === "ADD_BUILDING") {
        return mapHandler.addBuilding(action.payload);
    }

    if(action.type === "DELETE_BUILDING") {
        return databaseHandler.deleteBuilding(action.payload, events as Events);
    }

    if(action.type === "UPDATE_BUILDING") {
        return databaseHandler.updateBuilding(action.payload);
    }

    if(action.type === "DELETE_MODEL") {
        const {model, building} = action.payload;
        return databaseHandler.deleteModel(model, building, events as Events);
    }

    if(action.type === "UPLOAD_MODEL") {
        const { model, file, building } = action.payload;
        console.log("The file", file)
        const zipFile = await buildingHandler.convertIfcToFragments(file);
        console.log("Should be zip!", zipFile)
        return databaseHandler.uploadModel(model, zipFile, building, events as Events);
    }
    if(action.type === "START_BUILDING") {
        const {container, building, events} = action.payload;
        return buildingHandler.start(container, building, events);
    }
    if(action.type === "CLOSE_BUILDING") {
        return buildingHandler.remove();
    }
    
    if (action.type === "EXPLODE_MODEL") {
        return buildingHandler.explode(action.payload);
      }
      if (action.type === "TOGGLE_CLIPPER") {
        return buildingHandler.toggleClippingPlanes(action.payload);
      }
      if (action.type === "TOGGLE_DIMENSIONS") {
        return buildingHandler.toggleDimensions(action.payload);
      }
      if (action.type === "TOGGLE_FLOORPLAN") {
        const { active, floorplan } = action.payload;
        return buildingHandler.toggleFloorplan(active, floorplan);
      }
  
}