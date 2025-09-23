// import { GetFilesByPrefixAsync } from "../../../tickettoride-backend-common/src/file-store/game-files.mjs";
import { GetFileStoreKey, SendResourseAsync } from "@common/file-store/file-store-utils.js";

export async function GetAvatar(req, res) {
  const { gameId, playerId } = req.params;
  const key = GetFileStoreKey("avatar", gameId, playerId);
  await SendResourseAsync(key, res);
}

// export async function GetAvatars(req, res) {
//   const gameId = req.params.gameId;
//   const key = GetFileStoreKey("avatar", gameId);
//   const files = await GetFilesByPrefixAsync(key);
//   console.log(`Users list: ${files}`);
//   res.send(files);
// }
