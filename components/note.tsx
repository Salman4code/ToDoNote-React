import React from "react";
import Header from "./header";
import NoteForm from "./noteForm";
import NoteList from "./noteList";

const Note = ({
  formik,
  noteList,
  remove,
  editNote,
  logout,
  selectedNoteIndex,
}: any) => {
  return (
    <div className="container-fluid">
      <Header logout={logout} />
      <div className="row">
        <div className="col-4">
          <NoteList
            noteList={noteList}
            remove={remove}
            editNote={editNote}
            selectedNoteIndex={selectedNoteIndex}
          />
        </div>
        <div className="col-8">
          <div className="d-flex justify-content-end mt-2">
            <button type="button" className="btn btn-outline-dark">
              &#10010;Add Note
            </button>
          </div>
          <NoteForm formik={formik}></NoteForm>
        </div>
      </div>
    </div>
  );
};

export default Note;
