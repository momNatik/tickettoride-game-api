import { GetMapAsync } from "./controller.mjs";

export function RegisterMapEndpoints(app) {
  app.get("/:gameId/maps/:resourceId", GetMapAsync);
}