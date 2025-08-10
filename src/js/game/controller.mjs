import { IsResourcesReadyAsync } from "../../../tickettoride-backend-common/src/db/provider.mjs";
import { CreateGameAsync as abc } from "../../../tickettoride-backend-common/src/db/provider.mjs";

export async function CreateGameAsync(req, res) {
 await abc(req.body);
 res.send(200);
}

export async function GetGameStatusAsync(req, res) {
  res.setHeader("Content-Type", "text/plain");
  const isResourcesReady = await IsResourcesReadyAsync(req.params.gameId);
  res.send(isResourcesReady.toString());
}