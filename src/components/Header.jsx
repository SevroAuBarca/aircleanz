import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Header = () => {
  const [chose, setChose] = useState(true);
  return (
    <header className="w-full p-12">
      <div className="flex flex-col items-center gap-5 sm:hidden">
        <div>
          <img src={logo} alt="logo" className="w-9" />
        </div>
        <div>
          <ul className="flex gap-5 justify-center">
            {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <li
              className={
                "font-bold text-2xl text-white flex flex-col items-center"
              }
              onClick={() => setChose((prev) => !prev)}
            >
              <Link to="/">Iniciar Sesion</Link>
              {chose && (
                <div className="border-solid border-b-2 border-white w-3 h-5" />
              )}{" "}
            </li>
            {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <li
              className={
                "font-bold text-2xl text-white flex flex-col items-center"
              }
              onClick={() => setChose((prev) => !prev)}
            >
              <Link to="register">Registrar</Link>
              {!chose && (
                <div className="border-solid border-b-2 border-white w-3 h-5" />
              )}{" "}
            </li>
          </ul>
        </div>
      </div>
      <ul className="max-sm:hidden flex">
        <li>
          <img src={logo} alt="logo" className="w-24" />
        </li>
        {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <li
          className="font-bold text-2xl text-white flex flex-col items-center ml-auto"
          onClick={() => setChose((prev) => !prev)}
        >
          <Link to="/">Iniciar Sesion</Link>
          {chose && (
            <div className="border-solid border-b-2 border-white w-3 h-5" />
          )}{" "}
        </li>
        {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <li
          className={
            "font-bold text-2xl text-white flex flex-col items-center ml-5"
          }
          onClick={() => setChose((prev) => !prev)}
        >
          <Link to="register">Registrar</Link>
          {!chose && (
            <div className="border-solid border-b-2 border-white w-3 h-5" />
          )}{" "}
        </li>
      </ul>
    </header>
  );
};

export default Header;
