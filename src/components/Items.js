import { ACTIONS } from "../utils/pickReducer";

const Items = ({ items, pick, dispatch }) => {
  const options = items.map((el, index) => (
    <div
      key={el.type}
      className={`popup__item ${
        el.type === pick.item.type ? "popup__item--active" : ""
      }`}
      onClick={() =>
        dispatch({
          type: ACTIONS.CHANGE_FEATURE,
          payload: { item: el, itemPick: index },
        })
      }
    >
      {el.name}
    </div>
  ));

  return (
    <div className="popup__items">
      Rozmiar:
      <div className="popup__items-container">{options}</div>
    </div>
  );
};

export default Items;
