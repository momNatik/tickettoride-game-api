import DB from "@common/db/provider.js";
import QUEUE from "@common/queue/queue.js";

export default {
  InitAsync,
  InitGameAsync,
  CreateGameAsync,
  GetGameStatusAsync,
};

let channel;

async function InitAsync() {
  console.log("Connecting to queue...");
  const connection = await QUEUE.ConnectAsync();
  console.log("Connected to queue");

  channel = await QUEUE.CreateChannelAsync(connection, process.env.QUEUE_NAME);
  console.log("Created channel");
}

async function InitGameAsync(req, res) {
  const gameId = req.params.gameId;
  const msg = {
    gameId: gameId,
    numberOfPlayers: parseInt(req.body['number-of-players']),
    numberOfCities: parseInt(req.body['number-of-cities']),
    playWithComputer: !!req.body['play-with-computer'],
    paletteType: "earth",
    width: 320,
    height: 240,
  };
  console.log(`Initializing game '${gameId}'`);
  await QUEUE.SendMessageToQueue(channel, process.env.QUEUE_NAME, msg);
  res.send();
}

async function CreateGameAsync(req, res) {
  await DB.CreateGameAsync(req.body);
  res.send();
}

async function GetGameStatusAsync(req, res) {
  res.setHeader("Content-Type", "text/plain");
  console.log(`Get game status '${req.params.gameId}'`);
  const isResourcesReady = await DB.IsResourcesReadyAsync(req.params.gameId);
  res.send(isResourcesReady.toString());
}
