import { GetFileStoreKey, SendResourseAsync } from "../../../tickettoride-backend-common/src/file-store/file-store-utils.mjs"; 

export async function GetMapAsync(req, res) {
  const { gameId, resourceId } = req.params;
  const key = GetFileStoreKey(resourceId, gameId);
  await SendResourseAsync(key, res);
}