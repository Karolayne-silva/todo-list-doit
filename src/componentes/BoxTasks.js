import { useState } from "react";
import imgDelete from "../img/imgdelete.svg";
import imgCheck from "../img/check.png";

export default function Boxtasks({ nome, index, setTasks, tasks }) {
  const [checked, setChecked] = useState(true);

  function handleCheck() {
    setChecked(!checked);
  }
  function handleDelete() {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div className="box-task">
      <div
        className={checked ? "checked-false" : "checked-true"}
        onClick={handleCheck}
      >
        {!checked && <img src={imgCheck} alt="check" />}
      </div>
      <p>{nome}</p>
      <div className="delete" onClick={handleDelete}>
        <img src={imgDelete} />
      </div>
    </div>
  );
}
