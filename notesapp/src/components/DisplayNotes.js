import { useState } from "react";
import "./DisplayNotes.css";
import SelectCategory from "./Selection";


const DisplayNotes = ({ notes, deleteButton }) => {
  const [selection, setSelection] = useState("work");

  const changeSelection = (event) => {
    setSelection(event.target.value);
    console.log(selection);
  };

  return (
    <div
      className="notes"
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        position: "absolute",
      }}
    >
      {notes.map((note) => (
        <div key={note.id} className="box">
          {note.text}
          <button onClick={() => deleteButton(note.id)}>delete</button>
          <SelectCategory value={selection} changeSelection={changeSelection} />
        </div>
      ))}
    </div>
  );
};

export default DisplayNotes;
