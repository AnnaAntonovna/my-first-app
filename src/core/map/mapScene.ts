import { Container } from "@mui/material";
import * as OBC from "openbim-components";
import { env } from "process";
import { GisParameters } from "../../types";
import * as dotenv from "dotenv";
import * as MAPBOX from "mapbox-gl";
import { MapboxCamera } from "openbim-components/integrations/mapbox/src/mapbox-camera";
import { MapboxRenderer } from "openbim-components/integrations/mapbox/src/mapbox-renderer";
import { DirectionalLight } from "three";
import { MAPBOX_KEY } from "../../secret";

export class MapScene {
  private components = new OBC.Components();
  private readonly style = "mapbox://styles/mapbox/light-v10";

  constructor(container: HTMLDivElement) {
    const configuration = this.getConfig(container);
    this.initializeComponents(configuration);
    this.setupScene();
  }

  dispose() {
    try {
      this.components.dispose();
      (this.components as any) = null;
    } catch (error) {
      console.log(error);
    }
  }

  private setupScene() {
    const scene = this.components.scene.get();
    scene.background = null;
    const dirLight1 = new DirectionalLight(0xffffff);
    dirLight1.position.set(0, -70, 100).normalize();
    scene.add(dirLight1);

    const dirLight2 = new DirectionalLight(0xffffff);
    dirLight2.position.set(0, 70, 100).normalize();
    scene.add(dirLight2);
  }

  private initializeComponents(config: GisParameters) {
    this.components.scene = new OBC.SimpleScene(this.components);
    this.components.camera = new MapboxCamera(this.components);
    this.components.renderer = this.createRenderer(config);
    this.components.raycaster = new OBC.SimpleRaycaster(this.components);
    try {
      this.components.init();
    } catch (error) {
      console.log(error);
    }
  }

  private createRenderer(config: GisParameters) {
    const map = this.createMap(config);
    const coords = this.getCoordinates(config);

    return new MapboxRenderer(this.components, map, coords);
  }

  private getCoordinates(config: GisParameters) {
    const merc = MAPBOX.MercatorCoordinate;
    return merc.fromLngLat(config.center, 0);
  }

  private createMap(config: GisParameters) {
    return new MAPBOX.Map({
      ...config,
      style: this.style,
      antialias: true,
    });
  }

  private getConfig(container: HTMLDivElement) {
    const center = [9.239539615899416, 45.46235831229755] as [number, number];

    return {
      container,
      accessToken: MAPBOX_KEY, ////HERES A CATCH
      zoom: 15,
      pitch: 60,
      bearing: -40,
      center,
      buildings: [],
    };
  }
}
