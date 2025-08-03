// import { GetStatusAsync } from "../../../tickettoride-backend-common-js/src/store/game-resources.mjs";

export async function GetGameStatus(req, res) {
  res.setHeader("Content-Type", "text/plain");
  const gameId = req.params.gameId;

  res.send(gameId);
}

export async function GetMapBackgroundImage(req, res) {
  res.setHeader("Content-Type", "image/png");

  const gameId = req.params.gameId;

  res.send(gameId);
}