import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/action/loginAction";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(8, "Must be 8 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(addUser(values));
      router.push("/addNote");
    },
  });

  return (
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <div className="card card0 border-0">
        <div className="row d-flex">
          <div className="col-lg-6">
            <div className="card1 pb-5">
              <div className="row">
                {" "}
                <img
                  alt="test"
                  src="../../encora_logo.jpeg"
                  className="logo"
                />{" "}
              </div>
              <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                {" "}
                <img
                  alt="test"
                  src="https://i.imgur.com/uNGdWHi.png"
                  className="image"
                />{" "}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card2 card border-0 px-4 py-5">
              <div className="row px-3 mb-4">
                <div className="line"></div>{" "}
                <small className="or text-center">Or</small>
                <div className="line"></div>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div className="row px-3">
                  {" "}
                  <label className="mb-1">
                    <h6 className="mb-0 text-sm">Email Address</h6>
                  </label>{" "}
                  <input
                    className="mb-4"
                    type="text"
                    name="email"
                    placeholder="Enter a valid email address"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />{" "}
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-danger">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="row px-3">
                  {" "}
                  <label className="mb-1">
                    <h6 className="mb-0 text-sm">Password</h6>
                  </label>{" "}
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />{" "}
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-danger">{formik.errors.password}</div>
                  ) : null}
                </div>
                <div className="row mb-3 px-3">
                  {" "}
                  <button type="submit" className="btn btn-blue text-center">
                    Login
                  </button>{" "}
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-blue py-4">
          <div className="row px-3">
            {" "}
            <small className="ml-4 ml-sm-5 mb-2">
              Copyright &copy; 2021. All rights reserved.
            </small>
            <div className="social-contact ml-4 ml-sm-auto">
              {" "}
              <span className="fa fa-facebook mr-4 text-sm"></span>{" "}
              <span className="fa fa-google-plus mr-4 text-sm"></span>{" "}
              <span className="fa fa-linkedin mr-4 text-sm"></span>{" "}
              <span className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span>{" "}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card0 {
          box-shadow: 0px 4px 8px 0px #757575;
          border-radius: 0px;
        }

        .card2 {
          margin: 0px 40px;
        }

        .logo {
          width: 100px;
          height: 100px;
          margin-top: 20px;
          margin-left: 35px;
        }

        .image {
          width: 360px;
          height: 280px;
        }

        .border-line {
          border-right: 1px solid #eeeeee;
        }

        .facebook {
          background-color: #3b5998;
          color: #fff;
          font-size: 18px;
          padding-top: 5px;
          border-radius: 50%;
          width: 35px;
          height: 35px;
          cursor: pointer;
        }

        .twitter {
          background-color: #1da1f2;
          color: #fff;
          font-size: 18px;
          padding-top: 5px;
          border-radius: 50%;
          width: 35px;
          height: 35px;
          cursor: pointer;
        }

        .linkedin {
          background-color: #2867b2;
          color: #fff;
          font-size: 18px;
          padding-top: 5px;
          border-radius: 50%;
          width: 35px;
          height: 35px;
          cursor: pointer;
        }

        .line {
          height: 1px;
          width: 45%;
          background-color: #e0e0e0;
          margin-top: 10px;
        }

        .or {
          width: 10%;
          font-weight: bold;
        }

        .text-sm {
          font-size: 14px !important;
        }

        ::placeholder {
          color: #bdbdbd;
          opacity: 1;
          font-weight: 300;
        }

        :-ms-input-placeholder {
          color: #bdbdbd;
          font-weight: 300;
        }

        ::-ms-input-placeholder {
          color: #bdbdbd;
          font-weight: 300;
        }

        input,
        textarea {
          padding: 10px 12px 10px 12px;
          border: 1px solid lightgrey;
          border-radius: 2px;
          margin-bottom: 5px;
          margin-top: 2px;
          width: 100%;
          box-sizing: border-box;
          color: #2c3e50;
          font-size: 14px;
          letter-spacing: 1px;
        }

        input:focus,
        textarea:focus {
          -moz-box-shadow: none !important;
          -webkit-box-shadow: none !important;
          box-shadow: none !important;
          border: 1px solid #304ffe;
          outline-width: 0;
        }

        button:focus {
          -moz-box-shadow: none !important;
          -webkit-box-shadow: none !important;
          box-shadow: none !important;
          outline-width: 0;
        }

        a {
          color: inherit;
          cursor: pointer;
        }

        .btn-blue {
          background-color: #1a237e;
          width: 150px;
          color: #fff;
          border-radius: 2px;
        }

        .btn-blue:hover {
          background-color: #000;
          cursor: pointer;
        }

        .bg-blue {
          color: #fff;
          background-color: #1a237e;
        }

        @media screen and (max-width: 991px) {
          .logo {
            margin-left: 0px;
          }

          .image {
            width: 300px;
            height: 220px;
          }

          .border-line {
            border-right: none;
          }

          .card2 {
            border-top: 1px solid #eeeeee !important;
            margin: 0px 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default Login;
