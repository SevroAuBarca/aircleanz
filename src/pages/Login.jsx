import axios from "axios";
import { useFormik } from "formik";
import React from "react";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async (values) => {
      const response = await axios.post(
        "http://192.168.26.48:5000/signup",
        values
      );
      console.log(response);
    },
  });
  return (
    <>
      <div className="w-full flex justify-center items-center pt-12">
        <div className="w-full max-w-md">
          <form
            className="w-full p-7 flex flex-col gap-14"
            onSubmit={formik.handleSubmit}
          >
            <div className="w-full flex">
              <div className="border-solid border-b-2 border-white w-7 h-7 bg-cover">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffffff"
                    d="m12 23l-3-3H5q-.825 0-1.413-.588T3 18V4q0-.825.588-1.413T5 2h14q.825 0 1.413.588T21 4v14q0 .825-.588 1.413T19 20h-4l-3 3Zm0-11q1.45 0 2.475-1.025T15.5 8.5q0-1.45-1.025-2.475T12 5q-1.45 0-2.475 1.025T8.5 8.5q0 1.45 1.025 2.475T12 12Zm0 8.2l2.2-2.2H19v-1.15q-1.35-1.325-3.138-2.087T12 14q-2.075 0-3.863.763T5 16.85V18h4.8l2.2 2.2Z"
                  />
                </svg>
              </div>
              <input
                className="outline-none border-solid border-b-2 border-white w-full text-white bg-transparent text-center font-semibold placeholder:text-white placeholder:text-lg placeholder:text-center placeholder:font-semibold"
                type="text"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                placeholder="Usuario"
              />
            </div>
            <div className="w-full flex">
              <div className="border-solid border-b-2 border-white w-7 h-7 bg-cover">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffffff"
                    d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zm-2 0V7a4 4 0 1 0-8 0v1h8zm-5 6v2h2v-2h-2zm-4 0v2h2v-2H7zm8 0v2h2v-2h-2z"
                  />
                </svg>
              </div>
              <input
                className="outline-none border-solid border-b-2 border-white w-full text-white bg-transparent text-center font-semibold placeholder:text-white placeholder:text-lg placeholder:text-center placeholder:font-semibold"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Contraseña"
              />
            </div>
            <button
              className="w-full p-3 bg-black opacity-70 text-white rounded-full"
              type="submit"
            >
              Iniciar Sesion
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
