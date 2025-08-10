import DB from "../../../tickettoride-backend-common/src/db/provider.mjs";

export async function CreateGameAsync(req, res) {
 await DB.CreateGameAsync(req.body);
 res.send(200);
}

export async function GetGameStatusAsync(req, res) {
  res.setHeader("Content-Type", "text/plain");
  const isResourcesReady = await DB.IsResourcesReadyAsync(req.params.gameId);
  res.send(isResourcesReady.toString());
}