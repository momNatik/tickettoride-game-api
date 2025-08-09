import {
  GetGameStatusAsync,
  GetMapAsync,
  GetAvatars,
  GetAvatar,
} from "./controller.mjs";

export function RegisterGameResourcesEndpoints(app) {
  app.get("/:gameId/status", GetGameStatusAsync);
  app.get("/:gameId/map/:resourceId", GetMapAsync);
  app.get("/:gameId/users/avatar", GetAvatars);
  app.get("/:gameId/users/:userId/avatar", GetAvatar);
}