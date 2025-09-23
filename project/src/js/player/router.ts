import { GetAvatar } from "./controller.js";

export function RegisterPlayerEndpoints(app) {
  // app.get("/:gameId/players/avatar", GetAvatars);
  app.get("/:gameId/players/:playerId/avatar", GetAvatar);
}