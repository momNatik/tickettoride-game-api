import {
  CreateGameAsync,
  GetGameStatusAsync,
  GetMapAsync,
  GetAvatars,
  GetAvatar,
} from "./controller.mjs";

export function RegisterGameResourcesEndpoints(app) {
  app.post("/", CreateGameAsync);
  app.get("/:gameId/status", GetGameStatusAsync);
  app.get("/:gameId/map/:resourceId", GetMapAsync);
  app.get("/:gameId/players/avatar", GetAvatars);
  app.get("/:gameId/players/:playerId/avatar", GetAvatar);
}
