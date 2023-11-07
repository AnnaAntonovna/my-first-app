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
      // Sign-in successful, you can redirect or perform other actions here.
    } catch (error) {
      // Handle sign-in errors (e.g., display an error message).
      console.error("Sign-in error:", error);
    }
  },

  deleteBuilding: async (building: Building, events: Events) => {
      const id = building.uid;
      const dbInstance = getFirestore(getApp());
      await deleteDoc(doc(dbInstance, "buildings", id));
      events.trigger({type: "CLOSE_BUILDING"});
  },

  updateBuilding: async () => {
    const dbInstance = getFirestore(getApp());
    await update 
  }
};
