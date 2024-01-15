import { User } from 'firebase/auth';
import { Building, Floorplan, Property } from '../types';

export interface State {
    properties: Property[];
    floorplans: Floorplan[];
    user: User | null;
    building: Building | null;
}

export const  initialState: State = {
    user: null,
    building: null,
    floorplans: [],
    properties: [],
}