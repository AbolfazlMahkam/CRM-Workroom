/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import modeImage from "../assets/brightness.svg";
import { useDarkMode } from "../hook/useDarkMode";

export default function Header({ setShowResponsiveMenu, classMode }) {
  const [term, setTerm] = React.useState("");
  const navigate = useNavigate();
  const { changeMode, mode } = useDarkMode();

  const handleSearch = React.useCallback(
    (e) => {
      e.preventDefault();

      if (!term.trim()) {
        alert("Please enter a search term.");
        return;
      }

      navigate(`/search?q=${term}`);
      setTerm("");
    },
    [navigate, term]
  );
  const taggleMode = () => {
    changeMode(mode === "light" ? "dark" : "light");
  };

  const handleOpenMenu = React.useCallback(() => {
    setShowResponsiveMenu(true);
  }, [setShowResponsiveMenu]);

  return (
    <div className="grid-cols-2">
      <div className="col-span-1 grid grid-cols-2 max-[1000px]:grid-cols-1 relative">
        <div className="col-span-1">
          <form
            className={`flex rounded-xl px-2 items-center w-8/12 duration-300 max-[1000px]:w-full max-[1000px]:mt-12 ${
              classMode ? "bg-white" : "bg-slate-800"
            }`}
            onSubmit={handleSearch}
          >
            <label className="ml-1">
              <img
                className="w-4 cursor-pointer p-0 duration-300"
                style={{
                  filter: classMode ? "invert(0)" : "invert(100)",
                }}
                src="/img/search.svg"
                alt="Search"
              />
            </label>
            <input
              type="text"
              className={`ml-2 p-3 font-semibold text-sm border-0 active:border-0 w-full duration-300 outline-none ${
                classMode ? "" : "bg-slate-800 text-white"
              }`}
              name="search"
              placeholder="Search"
              onChange={(e) => setTerm(e.target.value)}
              value={term}
              required
            />
          </form>
        </div>
        <div className="col-span-1">
          <div className="flex justify-end mb-3 max-[1000px]:absolute max-[1000px]:top-0 max-[1000px]:right-0 max-[1000px]:w-full">
            <button
              onClick={taggleMode}
              className={`rounded-xl w-10 h-10 flex items-center justify-center mr-4 p-1 duration-300 cursor-pointer ${
                classMode
                  ? "bg-white hover:bg-slate-200"
                  : "bg-slate-800 hover:bg-slate-700"
              }`}
            >
              <img
                className={`w-7 duration-300 ${classMode ? "rotate-0" : "rotate-180"}`}
                style={{
                  filter: classMode ? "invert(0)" : "invert(100)",
                }}
                src={modeImage}
              />
            </button>
            <div
              className={`rounded-xl w-10 h-10 flex items-center justify-center mr-4 p-1 duration-300 cursor-pointer ${
                classMode
                  ? "bg-white hover:bg-slate-200"
                  : "bg-slate-800 hover:bg-slate-700"
              }`}
            >
              <img
                className="mx-auto w-5 duration-100"
                style={{
                  filter: classMode ? "brightness(0)" : "brightness(200)",
                }}
                src="/img/notifications.svg"
                alt="Notification"
              />
            </div>
            <div
              className={`flex rounded-xl h-10 items-center px-2 cursor-pointer transition-all duration-300 ${
                classMode
                  ? "bg-white hover:bg-slate-200"
                  : "bg-slate-800 hover:bg-slate-700 text-white"
              }`}
            >
              <img className="w-8 h-8 mr-2" src="/img/evan.png" alt="Evan" />
              <span className="font-semibold max-[1100px]:text-xs">
                Evan Yates
              </span>
              <img
                className="w-2.5 ml-3 mt-0.5 duration-300"
                src="/img/arrow-d.svg"
                alt="Arrow"
                style={{
                  filter: classMode ? "invert(0)" : "invert(100)",
                }}
              />
            </div>
            <button
              id="burger"
              className={`rounded-xl ml-2 px-2 py-1.5 cursor-pointer transition-all duration-300 hidden max-[1100px]:inline-block ${
                classMode
                  ? "bg-white hover:bg-slate-200"
                  : "bg-slate-800 hover:bg-slate-700 text-white"
              }`}
              onClick={handleOpenMenu}
            >
              <img
                className="w-6 mt-0.5 duration-300"
                src="/img/Bars4.svg"
                style={{
                  filter: classMode ? "invert(0)" : "invert(100)",
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
