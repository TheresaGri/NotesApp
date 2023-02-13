import { useState } from "react";
import "./App.css";
import DisplayNotes from "./DisplayNotes";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "hello",
    },
    {
      id: 2,
      text: "How are you",
    },
  ]);

  const deleteButton = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <div className="App">
     <button
        onClick={() =>
          setNotes([...notes, {
            id: Math.floor(Math.random() * 100) + 1,
            text: "hi",
          }])
        }
      >
        Add
      </button>
      <DisplayNotes notes={notes} deleteButton = {deleteButton}/> 
    </div>
  );

}

export default App;
