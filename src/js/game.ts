import fs from "node:fs";
import path from "path";
import { CreateAsync, UpdateAsync, GetStatusAsync } from "../../tickettoride-backend-common-js/src/store/game-resources.mjs";

import {
  getGameResourcesLocalPath,
  getGameResourceLocalPath,
  MapBackgroundImageResourceId,
  FileStorePath
} from "./common.mjs";

export async function initGameAsync(id) {
  // createGameResourcesFolder(id);
  // createGameResources(id);
  const game = {
    id: id,
    isResourcesReady: false
  };

  await CreateAsync(game);

  runTimer(id);
}

function runTimer(id) {
  const timer = setTimeout(async () => {
    const game = {
      id: id,
      isResourcesReady: true
    };

    await UpdateAsync(game);

    clearTimeout(timer);
  }, 4000)
}

function createGameResourcesFolder(gameId) {
  const gameResourcesLocalPath = getGameResourcesLocalPath(gameId);

  try {
    if (!fs.existsSync(gameResourcesLocalPath)) {
      fs.mkdirSync(gameResourcesLocalPath);
    }
  } catch (err) {
    console.error(err);
  }
}

function createGameResources(gameId) {
  const imageFileName = "map_background_image.png";
  const sourceImagePath = path.join(FileStorePath, imageFileName);
    
  const destinationImagePath = getGameResourceLocalPath(
    gameId,
    MapBackgroundImageResourceId
  );

  fs.copyFile(sourceImagePath, destinationImagePath, (err) => {
    if (err) throw err;
    console.log(`'${sourceImagePath}' was copied to '${destinationImagePath}'`);
  });
}
