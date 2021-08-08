import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addNote, removeNote } from "../redux/action/noteAction";
import Note from "../components/note";
import { useRouter } from "next/router";

const AddNote = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { note, user } = useSelector((state) => state);
  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      body: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(addNote(values));
    },
  });

  const remove = (values: any) => {
    dispatch(removeNote(values));
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

  return <Note formik={formik} noteList={note} remove={remove} />;
};

export default AddNote;
