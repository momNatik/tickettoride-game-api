import express from "express";
import { RegisterGameEndpoints } from "./js/game/router.mjs";
import { RegisterMapEndpoints } from "./js/map/router.mjs";
import { RegisterPlayerEndpoints } from "./js/player/router.mjs";

const port = process.env.PORT;

const app = express();

app.use(express.json());

RegisterGameEndpoints(app);
RegisterMapEndpoints(app);
RegisterPlayerEndpoints(app);

app.listen(port, () => console.log("Game API waiting for connections..."));