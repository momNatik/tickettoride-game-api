import express from "express";
import cors from "cors";
import { RegisterGameResourcesEndpoints } from "./js/resources/router.mjs";

const port = process.env.PORT;

const corsOptions = { origin: [process.env.TICKETTORIDE_API_URL] };

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

RegisterGameResourcesEndpoints(app);

app.listen(port, () => console.log("Game API waiting for connections..."));