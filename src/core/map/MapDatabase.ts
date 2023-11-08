import { collection, getFirestore, addDoc, query, where, onSnapshot } from "firebase/firestore";
import { Building } from "./../../types";
import { getApp } from "firebase/app";
import { User } from "firebase/auth";
import { resolve } from "path";
export class MapDatabase {
  private readonly buildings = "buildings";

  async add(building: Building) {
    const dbInstance = getFirestore(getApp());
    const { lat, lng, userID, name } = building;
    const result = await addDoc(collection(dbInstance, this.buildings), {
      lat,
      lng,
      userID,
      name,
    });

    return result.id;
  }

  async getBuildings(user: User){
    const dbInstance = getFirestore(getApp());
    const q = query(
        collection(dbInstance, this.buildings),
        where("userID", "==", user.uid)
    );

    return new Promise<Building[]>((resolve) => {
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const result: Building[] = [];
            snapshot.docs.forEach((doc) => {
                result.push({ ...(doc.data() as Building), uid: doc.id })
            });
            unsubscribe();
            resolve(result);
        })
    })
  }
}
