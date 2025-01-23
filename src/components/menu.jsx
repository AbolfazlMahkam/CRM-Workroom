/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";
import api from "../service/api";
import { useQuery } from "@tanstack/react-query";

export default function Menu({ setShowSupport, classMode }) {
  const handleOpenSupport = () => {
    setShowSupport(true);
  };

  const {
    data: menu,
    isLoading,
    error,
  } = useQuery(["menu"], async () => {
    const response = await api.get("menu");
    return response.data;
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div
        className={`h-full min-h-dvh rounded-3xl py-9 relative duration-300 max-[1100px]:mb-10 max-[1100px]:hidden ${
          classMode ? "bg-white" : "bg-slate-800"
        }`}
      >
        <img className=" ml-6 mb-8" src="/img/Company's logo.svg" alt="Logo" />

        <div>
          {menu &&
            menu.map((menu) => (
              <div key={menu.title} className="pr-4 pl-2 relative my-1 h-fit">
                <NavLink to={`/${menu.title}`} end>
                  {({ isActive }) => (
                    <button
                      className={
                        isActive
                          ? `p-3 rounded-2xl duration-300 flex w-full ${
                              classMode
                                ? "bg-blue-50 hover:bg-blue-100"
                                : "bg-blue-950 hover:bg-blue-900"
                            }`
                          : `p-3 rounded-2xl duration-300 flex w-full hover:bg-slate-200 ${
                              classMode
                                ? "hover:bg-slate-200"
                                : "hover:bg-slate-700"
                            }`
                      }
                    >
                      <img
                        src={isActive ? `${menu.src}-a.svg` : `${menu.src}.svg`}
                        className="transition-all duration-100"
                        style={
                          isActive
                            ? {}
                            : {
                                filter: classMode
                                  ? "brightness(100%)"
                                  : "brightness(100)",
                              }
                        }
                      />
                      <span
                        className={
                          isActive
                            ? "text-sm ml-3 font-semibold duration-300 text-blue-500"
                            : "text-sm ml-3 font-semibold duration-300 text-[#7D8492]"
                        }
                        style={
                          isActive ? {} : { color: classMode ? "" : "#fff" }
                        }
                      >
                        {menu.title}
                      </span>
                      <div
                        className={
                          isActive
                            ? "absolute top-0 right-0 mr-0.5 h-full w-1 bg-blue-500 rounded-full"
                            : "hidden"
                        }
                      ></div>
                    </button>
                  )}
                </NavLink>
              </div>
            ))}
        </div>

        <div className="absolute bottom-0 mb-2 w-full max-[1100px]:relative max-[1100px]:w-48">
          <div className="px-4 justify-center relative pt-11 items-end h-fit">
            <div>
              <img className="ml-2 absolute" src="/img/illustration.svg" />
            </div>
            <div
              className={`justify-center mt-12 rounded-xl h-40 pt-24 min-w-full duration-300 ${
                classMode ? "bg-slate-100" : "bg-slate-700"
              }`}
            >
              <div className=" justify-center rounded-md h-5">
                <button
                  id="supportBtn"
                  data-modal-targrt="authentication-modal"
                  data-modal-toggle="authentication-modal"
                  className="flex bg-blue-500 rounded-xl py-2 px-3 w-28 bottom-0 justify-center mx-auto shadow-md shadow-blue-700 hover:drop-shadow-lg transition duration-300 items-center"
                  type="button"
                  onClick={handleOpenSupport}
                >
                  <img src="/img/support.svg" />
                  <span className="text-white ml-2">Support</span>
                </button>
              </div>
            </div>
          </div>

          <div className="px-4 relative my-1 h-fit">
            <NavLink to="/" end>
              {({ isActive }) => (
                <button
                  className={
                    isActive
                      ? `p-3 rounded-2xl duration-300 flex w-full ${
                          classMode
                            ? "bg-blue-50 hover:bg-blue-100"
                            : "bg-blue-950 hover:bg-blue-900"
                        }`
                      : `p-3 rounded-2xl duration-300 flex w-full hover:bg-slate-200 ${
                          classMode
                            ? "hover:bg-slate-200"
                            : "hover:bg-slate-700"
                        }`
                  }
                >
                  <img
                    src={isActive ? "/img/logout-a.svg" : "/img/logout.svg"}
                    className="duration-100"
                    style={
                      isActive
                        ? {}
                        : {
                            filter: classMode
                              ? "brightness(100%)"
                              : "brightness(100)",
                          }
                    }
                  />
                  <span
                    className={
                      isActive
                        ? "text-sm ml-3 font-semibold duration-300 text-blue-500"
                        : "text-sm ml-3 font-semibold duration-300 text-[#7D8492]"
                    }
                    style={isActive ? {} : { color: classMode ? "" : "#fff" }}
                  >
                    Log out
                  </span>
                </button>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
