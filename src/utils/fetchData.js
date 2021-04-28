import { ACTIONS } from "./pickReducer";
import { getCache } from "./cacheData";

const extractItems = (obj) => {
  const items = Object.values(obj.sizes.items);
  return items;
};

const extractVersions = (obj) => {
  const versions = Object.values(
    obj.multiversions.find(
      (el) => el.id.toString() === obj.product.id.toString()
    ).items
  ).sort(
    (a, b) => a.products[0].version_priority - b.products[0].version_priority
  );
  return versions;
};

export const fetchData = ({
  dispatch,
  setProduct,
  setItems,
  setVersions,
  setStatus,
  source,
}) => {
  fetch(source)
    .then((res) => {
      if (res.ok) {
        return res;
      } else {
        throw Error(res.statusText);
      }
    })
    .then((res) => res.json())
    .then((res) => {
      const product = { ...res.product };
      const items = extractItems(res);
      const versions = extractVersions(res);
      const cached = getCache(res.product.id);
      const pick = {
        item: items[cached ? cached.itemPick : 0],
        version: versions[cached ? cached.versionPick : 0],
        productID: res.product.id,
        amount: cached ? cached.amount : 1,
        itemPick: 0,
        versionPick: 0,
      };
      setProduct(product);
      setVersions(versions);
      setItems(items);
      dispatch({ type: ACTIONS.INITIALIZE, payload: { pick } });
      setStatus("rdy");
    })
    .catch((err) => {
      setStatus("err");
      console.error(err);
    });
};
