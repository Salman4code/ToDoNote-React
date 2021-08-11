import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addNote, removeNote, updateNote } from "../redux/action/noteAction";
import { removeUser } from "../redux/action/loginAction";
import Note from "../components/note";
import { useRouter } from "next/router";

const AddNote = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [editNoteIndex, setEditNoteIndex] = useState<any>(null);
  const [showNoteForm, setShowNoteForm] = useState(false);
  const { note, user } = useSelector((state) => state);

  const handleFormSubmit = (values: any) => {
    if (editNoteIndex != null && editNoteIndex != undefined) {
      let notes = [...note];
      notes[editNoteIndex] = values;
      dispatch(updateNote(notes));
      setEditNoteIndex(null);
    } else {
      dispatch(addNote(values));
    }
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      id: note.length > 0 ? note.length : 1,
      title: "",
      body: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      body: Yup.string().required("Required"),
    }),
    onSubmit: handleFormSubmit,
  });

  const remove = (values: any) => {
    dispatch(removeNote(values));
  };

  const editNote = (values: any, index: any) => {
    console.log("editNote", values, index);
    setEditNoteIndex(index);
    formik.setFieldValue("title", values.title);
    formik.setFieldValue("body", values.body);
    formik.setFieldValue("id", values.id);
    setShowNoteForm(true);
  };
  const isEmpty = (obj: any) => {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return JSON.stringify(obj) === JSON.stringify({});
  };
  useEffect(() => {
    // if user is not exist in reducer then redirect to login page
    if (isEmpty(user)) {
      router.push("/");
    }
  }, []);

  const logout = () => {
    router.push("/");
    dispatch(removeUser());
  };

  return (
    <Note
      formik={formik}
      handleFormSubmit={handleFormSubmit}
      noteList={note}
      remove={remove}
      editNote={editNote}
      logout={logout}
      selectedNoteIndex={editNoteIndex}
      showNoteForm={showNoteForm}
      setShowNoteForm={setShowNoteForm}
    />
  );
};

export default AddNote;
