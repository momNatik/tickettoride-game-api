import express from "express";
import { RegisterGameResourcesEndpoints } from "./js/resources/router.mjs";

const port = process.env.PORT;

const app = express();

app.use(express.json());

RegisterGameResourcesEndpoints(app);

app.listen(port, () => console.log("Game API waiting for connections..."));