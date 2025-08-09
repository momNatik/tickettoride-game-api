import { IsResourcesReadyAsync } from "../../../tickettoride-backend-common/src/db/provider.mjs";
import {
  GetFileAsync,
  GetFilesByPrefixAsync,
} from "../../../tickettoride-backend-common/src/file-store/game-files.mjs";

export async function GetGameStatus(req, res) {
  res.setHeader("Content-Type", "text/plain");
  const isResourcesReady = await IsResourcesReadyAsync(req.params.gameId);
  res.send(isResourcesReady.toString());
}

export async function GetMapBackgroundImage(req, res) {
  res.setHeader("Content-Type", "image/png");
  const gameId = req.params.gameId;
  const key = GetFileStoreKey("background", gameId);
  const fileResponse = await GetFileAsync(key);

  res.writeHead(200, {
    "Content-Type": "image/jpeg",
    "Content-Length": fileResponse.ContentLength,
  });

  const buffer = await fileResponse.Body.transformToByteArray();
  res.end(buffer);
}

export async function GetMapTopology(req, res) {
  res.setHeader("Content-Type", "image/png");
  const gameId = req.params.gameId;
  const key = GetFileStoreKey("topology", gameId);
  const file = await GetFileAsync(key);

  res.send(file);
}

export async function GetAvatar(req, res) {
  res.setHeader("Content-Type", "image/png");
  const gameId = req.params.gameId;
  const userId = req.params.userId;
  const key = GetFileStoreKey("avatar", gameId, userId);
  const file = await GetFileAsync(key);

  res.send(file);
}

export async function GetAvatars(req, res) {
  res.setHeader("Content-Type", "image/png");
  const gameId = req.params.gameId;
  const key = GetFileStoreKey("avatar", gameId);
  const files = await GetFilesByPrefixAsync(key);
  console.log(`Users list: ${files}`);
  res.send(files);
}

function GetFileStoreKey(resourseType, ...ids) {
  const prefix = GetFileStoreKeyPrefix(ids);
  const resourceName = GetResourceName(resourseType);
  return `${prefix}${resourceName}`;
}

function GetFileStoreKeyPrefix(...ids) {
  const notEmptyIds = ids.filter((id) => id).map((id) => `${id}_`);
  return notEmptyIds.join("");
}

function GetResourceName(type) {
  const resourceNames = {
    background: "map_background.png",
    topology: "map_topology.svg",
    avatar: "user_avatar.jpg",
  };
  return resourceNames[type];
}
