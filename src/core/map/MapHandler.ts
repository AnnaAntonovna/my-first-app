import { MapScene } from "./mapScene";

export const mapHandler = {
  started: false,
  map: null as MapScene | null,

  start(container: HTMLDivElement) {
    if (!this.map) {
      console.log("Map started");
      this.map = new MapScene(container);
    }
  },

  remove() {
    if (this.map) {
      console.log("Map removed");
      this.map.dispose();
      this.map = null;
    }
  },
};
