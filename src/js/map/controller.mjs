import { GetFileStoreKey, SendResourseAsync } from "../common.mjs";

export async function GetMapAsync(req, res) {
  const { gameId, resourceId } = req.params;
  const key = GetFileStoreKey(resourceId, gameId);
  await SendResourseAsync(key, res);
}