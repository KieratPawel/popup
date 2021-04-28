export const submitOrder = ({ setStatus, setTrigger, pick, status }) => {
  if (!status) return;
  console.log(pick);
  fetch("serwer.com/api/order", {
    method: "POST",
    body: JSON.stringify({
      id: pick.productID,
      amount: pick.amount,
      item: pick.item,
      version: pick.version,
    }),
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  })
    .then((res) => {
      if (res.ok) {
        return setTrigger(false);
      } else {
        throw Error(res.statusText);
      }
    })
    .catch((err) => {
      setStatus("err");
      console.error(err);
    });
};
