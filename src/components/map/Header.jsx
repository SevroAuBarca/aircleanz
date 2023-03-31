import React, { useState } from "react";
import logo from "../../assets/logo.png";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header className="w-28 h-[100vh] relative flex">
        <ul className="flex flex-col gap-7">
          <li className="mb-auto">
            <img src={logo} alt="logo" className="w-32" />
          </li>
          <li
            onClick={() => setToggle((prev) => !prev)}
            className="flex flex-col items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90%"
              height={"2em"}
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#0080ff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M18.134 11C18.715 16.375 21 18 21 18H3s3-2.133 3-9.6c0-1.697.632-3.325 1.757-4.525C8.883 2.675 10.41 2 12 2c.337 0 .672.03 1 .09M19 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm-5.27 13a1.999 1.999 0 0 1-3.46 0"
              />
            </svg>
            <p className="italic text-sm">Notificaciones</p>
          </li>
          <li className="mb-auto flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90%"
              height={"2em"}
              viewBox="0 0 16 16"
            >
              <path
                fill="#0080ff"
                fillRule="evenodd"
                d="M11.02 3.77v1.56l1-.99V2.5l-.5-.5h-9l-.5.5v.486L2 3v10.29l.36.46l5 1.72L8 15v-1h3.52l.5-.5v-1.81l-1-1V13H8V4.71l-.33-.46L4.036 3h6.984v.77zM7 14.28l-4-1.34V3.72l4 1.34v9.22zm6.52-5.8H8.55v-1h4.93l-1.6-1.6l.71-.7l2.47 2.46v.71l-2.49 2.48l-.7-.7l1.65-1.65z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="italic text-sm">Cerrar Sesion</p>
          </li>
          <li className="mt-auto">XD</li>
        </ul>
        <div
          className={`absolute w-72 h-[100vh] ${
            toggle
              ? "translate-x-[110px] max-sm:translate-x-[90px]"
              : "translate-x-[-310px]"
          } z-20 bg-white`}
        >
          <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 p-10">
            <h2 className="text-xl font-semibold text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  d="M15.125 21.1L6.7 12.7q-.15-.15-.213-.325T6.425 12q0-.2.062-.375T6.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L9.55 12l7.35 7.35q.35.35.35.863t-.375.887q-.375.375-.875.375t-.875-.375Z"
                ></path>
              </svg>
              Notificaciones
            </h2>
          </div>
          <div className="p-5">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-5 flex gap-4">
              <div className="w-16 shadow-2xl flex justify-center items-center bg-transparent">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="3em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffffff"
                    d="M2 10q0-2.2.888-4.163T5.425 2.45l1.425 1.4Q5.5 5.025 4.75 6.613T4 10H2Zm18 0q0-1.8-.75-3.388t-2.1-2.762l1.425-1.4q1.65 1.425 2.538 3.388T22 10h-2ZM4 19v-2h2v-7q0-2.075 1.25-3.688T10.5 4.2V2h3v2.2q2 .5 3.25 2.113T18 10v7h2v2H4Zm8 3q-.825 0-1.413-.588T10 20h4q0 .825-.588 1.413T12 22Z"
                  ></path>
                </svg>
              </div>
              <div>
                <p className="text-sm text-white italic">
                  Tu Contenedor esta por llenarse!
                </p>
                <p className="text-sm text-white italic">
                  Maximo capacidad: 80%
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
