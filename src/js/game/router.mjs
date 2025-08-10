import { CreateGameAsync, GetGameStatusAsync } from "./controller.mjs";

export function RegisterGameEndpoints(app) {
  app.post("/", CreateGameAsync);
  app.get("/:gameId/status", GetGameStatusAsync);
}