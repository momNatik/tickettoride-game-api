import { IsResourcesReadyAsync } from "../../../tickettoride-backend-common-js/src/store/provider.mjs";

export async function GetGameStatus(req, res) {
  res.setHeader("Content-Type", "text/plain");
  const isResourcesReady = await IsResourcesReadyAsync(req.params.gameId);
  res.send(isResourcesReady.toString());
}

export async function GetMapBackgroundImage(req, res) {
  res.setHeader("Content-Type", "image/png");

  const gameId = req.params.gameId;

  res.send(gameId);
}