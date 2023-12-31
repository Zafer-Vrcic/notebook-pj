import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import NoteItem from "../component/NoteItem";
import { Link } from "react-router-dom";
import { HiPlusSm } from "react-icons/hi";

const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = () => {
    setFilteredNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
          return note;
        }
      })
    );
  };
  useEffect(handleSearch, [text]);
  return (
    <section className="container">
      <header className="notes_header">
        {!showSearch && <h2>NoteBook</h2>}
        {showSearch && (
          <input
            type="text"
            placeholder="Please write to word for your note  which you looking"
            onChange={(e) => {
              setText(e.target.value);
              handleSearch();
            }}
          />
        )}

        <button
          className="btn"
          onClick={() => setShowSearch((prevState) => !prevState)}
        >
          {showSearch ? <IoMdClose /> : <CiSearch />}
        </button>
      </header>
      <div className="notes_container">
        {filteredNotes.length == 0 && (
          <p className="empty_notes">Do you want to write something?</p>
        )}
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
        <Link className="btn add_btn" to="create-note">
        <HiPlusSm />
      </Link>
      </div>
      
    </section>
  );
};

export default Notes;
