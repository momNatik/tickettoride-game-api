import { GetGameStatus, GetMapBackgroundImage } from "./controller.mjs";

export function RegisterGameResourcesEndpoints(app) {
    app.get("/:gameId/resources/status", GetGameStatus);
    app.get("/:gameId/resources/mapbackgroundimage", GetMapBackgroundImage);
}
