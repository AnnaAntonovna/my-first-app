import { ActionType } from "../../middleware/Actions";
import { Action } from "../../middleware/Actions";
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const userAuth = {
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
};
