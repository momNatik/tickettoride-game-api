import { GetMapAsync } from "./controller.mjs";

export function RegisterMapEndpoints(app) {
  app.get("/:gameId/map/:resourceId", GetMapAsync);
}