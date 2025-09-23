import { GetFileStoreKey, SendResourseAsync } from "@common/file-store/file-store-utils.js"; 

export async function GetMapAsync(req, res) {
  const { gameId, resourceId } = req.params;
  console.log(`Get map: ${gameId}, ${resourceId}`);
  const key = GetFileStoreKey(resourceId, gameId);
  console.log(`Map key: ${key}`);
  await SendResourseAsync(key, res);
}