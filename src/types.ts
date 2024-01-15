export interface GisParameters {
    container: HTMLDivElement;
    accessToken: string;
    zoom: number;
    pitch: number,
    center: [number, number];
    bearing: number;
    buildings: Building[];
}

export interface Building {
    uid: string;
    userID: string;
    lat: number;
    lng: number;
    name: string;
    models: Model[];
}

export interface LngLat {
    lng: number;
    lat: number;
}

export interface Floorplan {
    name: string;
    id: string;
  }

export interface Tool {
    name: string;
    icon: any;
    active?: boolean,
    action: (...args: any) => void;
}

export interface ToolXS {
    name: string;
    icon: any;
    active?: boolean,
    action?: (...args: any) => void;
}

export interface Model {
    name: string;
    id: string;
}

export interface Floorplan {
    name: string;
    id: string;
  }
  
  export interface Property {
    name: string;
    value: string;
  }