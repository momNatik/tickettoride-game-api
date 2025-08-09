import {
  GetGameStatus,
  GetMapBackgroundImage,
  GetMapTopology,
  GetAvatars,
  GetAvatar,
} from "./controller.mjs";

export function RegisterGameResourcesEndpoints(app) {
  app.get("/:gameId/status", GetGameStatus);
  app.get("/:gameId/map/background", GetMapBackgroundImage);
  app.get("/:gameId/map/topology", GetMapTopology);
  app.get("/:gameId/users/avatar", GetAvatars);
  app.get("/:gameId/users/:userId/avatar", GetAvatar);
}