import express from "express";
import { InitAsync, RegisterGameEndpoints } from "./js/game/router.js";
import { RegisterMapEndpoints } from "./js/map/router.js";
import { RegisterPlayerEndpoints } from "./js/player/router.js";
import LOGGING from "@common/logging/log.js";

LOGGING.ShowStartInfo("GAME_API_NAME");

Main();

async function Main() {
  const port = process.env.GAME_API_PORT;

  const app = express();

  app.use(express.json());

  await InitAsync();

  RegisterGameEndpoints(app);
  RegisterMapEndpoints(app);
  RegisterPlayerEndpoints(app);

  app.listen(port, () => console.log("Game API waiting for connections..."));
}
