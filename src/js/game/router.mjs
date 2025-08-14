import Controller from "./controller.mjs";

export async function InitAsync() {
 await Controller.InitAsync();
}

export function RegisterGameEndpoints(app) {
  app.post("/init", Controller.InitGameAsync);
  app.post("/", Controller.CreateGameAsync);
  app.get("/:gameId/status", Controller.GetGameStatusAsync);
}
