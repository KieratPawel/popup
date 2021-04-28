import { ACTIONS } from "../utils/pickReducer";

const Versions = ({ versions, dispatch }) => {
  const options = versions.map((el) => (
    <option key={el.values_id} data-id={el.values_id} className="popup__option">
      {el.values[el.values_id].name}
    </option>
  ));

  const handleSelect = (event) => {
    const index = versions.findIndex(
      (el) =>
        el.values_id === event.target[event.target.selectedIndex].dataset.id
    );
    dispatch({
      type: ACTIONS.CHANGE_FEATURE,
      payload: { version: versions[index], versionPick: index },
    });
  };

  return (
    <div className="popup__versions">
      Wariant:
      <select className="popup__select" onChange={handleSelect}>
        {options}
      </select>
    </div>
  );
};

export default Versions;
