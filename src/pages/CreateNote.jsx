import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuArrowDownLeft } from "react-icons/lu";
import { v4 as uuid } from "uuid";
import useCreateDate from "../component/useCreateDate";

const CreateNote = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const date = useCreateDate();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && details) {
      const note = {
        id: uuid(),
        title,
        details,
        date,
      };
      //to add notes
      setNotes((prevNotes) => [note, ...prevNotes]);
      navigate("/");
    }
  };
  return (
    <section>
      <header className="create-note-header">
        <Link to={"/"} className="btn">
          <LuArrowDownLeft />
        </Link>
        <button className="btn lg primary" onClick={handleSubmit}>
          Save
        </button>
      </header>
      <form className="create-note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          rows="28"
          placeholder="Details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default CreateNote;
