import React, { useState } from "react";

function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handelEditClick() {
    setIsEditing(!isEditing);
    // setIsEditing((editing)=>!editing);
  }

  function handelChange(event) {
    setPlayerName(event.target.value);
  }
  let editingPlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editingPlayerName = (
      <input type="text" required value={playerName} onChange={handelChange} />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span>
        {editingPlayerName}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handelEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
