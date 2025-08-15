import DB from "../../../tickettoride-backend-common/src/db/provider.mjs";
import QUEUE from "../../../tickettoride-backend-common/src/queue/queue.mjs";


let channel;

export async function InitAsync() {
  const connection = await QUEUE.ConnectAsync();

  channel = await QUEUE.CreateChannelAsync(
    connection,
    process.env.QUEUE_NAME
  );
}

export async function InitGameAsync(req, res) {
  const msg = req.body;
  await QUEUE.SendMessageToQueue(channel, process.env.QUEUE_NAME, msg);
}

export async function CreateGameAsync(req, res) {
  await DB.CreateGameAsync(req.body);
  res.send(200);
}

export async function GetGameStatusAsync(req, res) {
  res.setHeader("Content-Type", "text/plain");
  const isResourcesReady = await DB.IsResourcesReadyAsync(req.params.gameId);
  res.send(isResourcesReady.toString());
}
