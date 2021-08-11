import { useState } from "react";

const NoteList = ({ remove, noteList, editNote, selectedNoteIndex }: any) => {
  return (
    <ul
      className="list-group"
      style={{ height: "100vh", border: "1px solid rgb(227,227,227)" }}
    >
      {noteList.length > 0 &&
        noteList.map((data: any, index: number) => (
          <li className="list-group-item" key={index} style={{ color: "gray" }}>
            <p
              className="btn"
              style={{ float: "right" }}
              onClick={() => remove(data)}
            >
              &#10006;
            </p>
            {index !== selectedNoteIndex && (
              <p
                className="btn"
                style={{ float: "right" }}
                onClick={() => {
                  editNote(data, index);
                }}
              >
                <img src="../../edit-button-icon.jpg" alt="edit" width="20" />
              </p>
            )}
            <div> {data.title}</div>
            <div>{data.body}</div>
          </li>
        ))}
    </ul>
  );
};
export default NoteList;
