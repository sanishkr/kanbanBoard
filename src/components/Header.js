import React from "react";

export default ({ members }) => {
  return (
    <header>
      <h3>Task Board</h3>
      <ul>
        <li>Members: </li>
        {members.map((m, i) => (
          <li className="user" key={m.id}>{m.name}</li>
        ))}
      </ul>
    </header>
  );
};
