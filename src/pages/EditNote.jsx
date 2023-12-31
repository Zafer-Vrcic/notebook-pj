import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import useCreateDate from "../component/useCreateDate"

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id == id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();
  // console.log(id);
  // console.log(note);

  // work when title and detail change 
  const handleForm = (e) => {
    e.preventDefault();
    if (title && details) {
      const newNote = { ...note, title, details, date };

      const newNotes = notes.map((item) => {
        if (item.id == id) {
          item = newNote;
        }
        return item;
      });
      setNotes(newNotes);
    } else {
      return;
    }
    navigate("/");
  };

  // delete note function
  const handleDelete = () => {
    if (window.confirm("Are you sure about to delete this note?")) {
      const newNotes = notes.filter((item) => item.id != id);
      setNotes(newNotes);
      navigate("/");
    }
  };
  return (
    <section>
      <header className="create-note-header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary" onClick={handleForm}>
          Save
        </button>
        <button className="btn lg danger" onClick={handleDelete}>
          <MdDelete />
        </button>
      </header>
      <form className="create-note-form" onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Başlık"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows="28"
          placeholder="Not details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;