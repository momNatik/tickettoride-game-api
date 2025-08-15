import express from "express";
import { InitAsync, RegisterGameEndpoints } from "./js/game/router.mjs";
import { RegisterMapEndpoints } from "./js/map/router.mjs";
import { RegisterPlayerEndpoints } from "./js/player/router.mjs";

Main();

async function Main() {
  const port = process.env.PORT;

  const app = express();

  app.use(express.json());

  await InitAsync();

  RegisterGameEndpoints(app);
  RegisterMapEndpoints(app);
  RegisterPlayerEndpoints(app);

  app.listen(port, () => console.log("Game API waiting for connections..."));
}
