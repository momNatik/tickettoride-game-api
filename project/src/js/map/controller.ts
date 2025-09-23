import { GetFileStoreKey, SendResourseAsync } from "../../../tickettoride-backend-common/src/file-store/file-store-utils.mjs"; 

export async function GetMapAsync(req, res) {
  const { gameId, resourceId } = req.params;
  console.log(`Get map: ${gameId}, ${resourceId}`);
  const key = GetFileStoreKey(resourceId, gameId);
  console.log(`Map key: ${key}`);
  await SendResourseAsync(key, res);
}