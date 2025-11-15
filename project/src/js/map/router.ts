import { GetMapResourseAsync } from "./controller.js";

export function RegisterMapEndpoints(app) {
  app.get("/:gameId/maps/:resourceId", GetMapResourseAsync);
}