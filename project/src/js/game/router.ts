import Controller from "./controller.js";

export async function InitAsync() {
 await Controller.InitAsync();
}

export function RegisterGameEndpoints(app) {
  app.post("/:gameId/init", Controller.InitGameAsync);
  app.post("/", Controller.CreateGameAsync);
  app.get("/:gameId/status", Controller.GetGameStatusAsync);
}
