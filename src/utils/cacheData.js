export const cacheData = (pick) => {
  if (!pick) return;
  const data = {
    amount: pick.amount,
    itemPick: pick.itemPick,
    versionPick: pick.versionPick,
  };
  localStorage.setItem(pick.productID, JSON.stringify(data));
};

export const getCache = (itemID) => {
  const cache = localStorage.getItem(itemID);
  if (!cache) return null;
  return JSON.parse(cache);
};
