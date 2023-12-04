import { Building } from './../../types';
import { ActionType } from "../../middleware/Actions";
import { Action } from "../../middleware/Actions";
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { deleteDoc, doc, getFirestore, updateDoc } from "firebase/firestore";
import { Events } from '../../middleware/Events';
import { getApp } from 'firebase/app';

export const databaseHandler = {
  login: () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  },

  logout: () => {
    const auth = getAuth();
    signOut(auth);
  },

  loginWithEmailAndPassword: async (email: string, password: string) => {
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  },

  deleteBuilding: async (building: Building, events: Events) => {
    const id = building.uid;
    console.log(id);
    const dbInstance = getFirestore(getApp());
    await deleteDoc(doc(dbInstance, "buildings", id));
    events.trigger({ type: "CLOSE_BUILDING" });
  },

  updateBuilding: async (building: Building) => {
    const dbInstance = getFirestore(getApp());
    await updateDoc(doc(dbInstance, "buildings", building.uid), {
      ...building, 
    }); 
  }
};
