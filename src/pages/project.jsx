/* eslint-disable react/prop-types */
// import React from "react";
import { useQuery } from "@tanstack/react-query";
import PN0001265 from "../components/projects/PN0001265";
import api from "../service/api";

export default function Project({ classMode }) {
  const {
    data: projectList,
    isLoading,
    error,
  } = useQuery(["projectList"], async () => {
    const response = await api.get("projectList")
    return response.data;
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="">
        <div className="w-full flex justify-between items-center mb-5">
          <div className="my-5 max-[1000px]:mt-4 relative">
            <h1
              className={`font-semibold text-4xl mt-2 duration-300 ${
                classMode ? "" : "text-white"
              }`}
            >
              Projects
            </h1>
          </div>

          <button className="bg-blue-500 p-2 rounded-xl mt-4 hover:bg-blue-600 shadow-blue-800 hover:shadow-lg duration-300 flex justify-center items-center">
            <img className="mr-1 w-3" src="/img/ne-plus.svg" />
            <p className="text-white">Add Project</p>
          </button>
        </div>
        <div className="grid grid-cols-4 max-[1100px]:grid-cols-1">
          <div className="col-span-1 h-lv h-full">
            <div
              className={`rounded-3xl py-4  h-full duration-300 ${
                classMode ? "bg-white" : "bg-slate-800"
              }`}
            >
              <div id="currentBx">
                <div className="flex px-4 border-gray-200 border-b pb-4">
                  <span
                    className={`font-semibold mr-3 duration-300 ${
                      classMode ? "" : "text-white"
                    }`}
                  >
                    Current Project
                  </span>
                  <img
                    className="mt-1 duration-100"
                    src="/img/arrow-d.svg"
                    alt=""
                    style={{
                      filter: classMode ? "brightness(0)" : "brightness(200)",
                    }}
                  />
                </div>
                <div>
                  <div className="p-2 pr-3 relative grid max-[1100px]:grid-cols-2 max-[1100px]:gap-4">
                    {projectList &&
                      projectList.map((proj) => (
                        <div
                          key={proj.serial}
                          className="p-3 bg-slate-100 rounded-2xl mb-2 hover:bg-slate-200 transition cursor-pointer"
                        >
                          <span className="text-gray-400 text-sm">
                            {proj.serial}
                          </span>
                          <h1 className="font-semibold">{proj.title}</h1>
                          <div id="viewDetail" className="flex cursor-pointer">
                            <button className="text-blue-400 text-sm font-semibold cursor-pointer hover:text-blue-500 transition">
                              View details
                            </button>
                            <img className="ml-2" src="/img/arrow-b2.svg" />
                          </div>
                        </div>
                      ))}

                    <div className="p-3 bg-slate-100 rounded-2xl mb-2 hover:bg-slate-200 transition cursor-pointer">
                      <span className="text-gray-400 text-sm">PN0001265</span>
                      <h1 className="font-semibold">
                        Medical App (IOS native)
                      </h1>
                      <div id="viewDetail" className="flex cursor-pointer">
                        <button className="text-blue-400 text-sm font-semibold cursor-pointer hover:text-blue-500 transition">
                          View details
                        </button>
                        <img className="ml-2" src="/img/arrow-b2.svg" />
                      </div>
                    </div>

                    <img
                      className="absolute h-20 top-0.5 right-0 mt-3 max-[1100px]:left-0"
                      src="/img/activesection2.svg"
                    />
                  </div>
                </div>
              </div>
              <div id="projectDetail" className="hidden px-4">
                <div className="flex relative">
                  <div>
                    <span className="text-sm text-gray-400">
                      Project Number
                    </span>
                    <h1 className="pt-1">PN0001245</h1>
                  </div>
                  <div className="absolute right-0 bg-slate-100 rounded-lg p-2 cursor-pointer hover:bg-slate-200 transition">
                    <img src="/img/filter.svg" />
                  </div>
                </div>
                <div className="pr-10 pt-5">
                  <h1 className="font-semibold">Description</h1>
                  <span className="text-gray-500 text-sm">
                    App for maintaining you medical record making appointments
                    with a doctor, storing prescription
                  </span>
                </div>
                <div className="pt-4">
                  <span className="text-sm text-gray-400">Reported</span>
                  <div className="flex pt-1">
                    <img className="w-6 h-6 mr-2" src="/img/evan.png" />
                    <span>Evan Yates</span>
                  </div>
                </div>
                <div className="pt-3">
                  <span className="text-sm text-gray-400">Assignees</span>
                  <div className="relative">
                    <img
                      className="w-5 absolute border-white border rounded-full"
                      src="/img/wl-ph5.png"
                    />
                    <img
                      className="w-5 absolute ml-4 border-white border rounded-full"
                      src="/img/wl-ph2.png"
                    />
                    <img
                      className="w-5 absolute ml-8 border-white border rounded-full"
                      src="/img/wl-ph8.png"
                    />
                    <div className="bg-blue-400 p-0.5 rounded-full w-5 h-5 text-white text-xs absolute ml-12">
                      +2
                    </div>
                  </div>
                </div>
                <div className="pt-7">
                  <span className="text-sm text-gray-400">Priority</span>
                  <div className="flex pt-1">
                    <img src="/img/arrow-y.svg" />
                    <span className="text-sm text-yellow-300 ml-1 mt-0.5">
                      Medium
                    </span>
                  </div>
                </div>
                <div className="pt-3">
                  <span className="text-sm text-gray-400">Dead Line</span>
                  <h1>Feb 23, 2020</h1>
                </div>
                <div className="pt-7 pl-1">
                  <div className="flex">
                    <img className="w-4 mr-2" src="/img/calendar.svg" />
                    <span className="text-gray-500 text-sm">
                      Created Sep 12,2020
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 pl-1 pt-3">
                  <img
                    className="bg-purple-100 p-2 rounded-lg hover:bg-purple-200 transition cursor-pointer"
                    src="/img/gire.svg"
                  />
                  <img
                    className="bg-teal-100 p-2 rounded-lg hover:bg-teal-200 transition cursor-pointer"
                    src="/img/gire.svg"
                  />
                </div>
                <div
                  id="backToProjectList"
                  className="flex cursor-pointer pt-2"
                >
                  <img className="mr-1" src="/img/arrow-b3.svg" />
                  <button className="text-blue-400 text-sm font-semibold cursor-pointer hover:text-blue-500 transition">
                    Back to Project list
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 py-2 pl-8 max-[1100px]:pl-0">
            <div className="grid grid-cols-3">
              <div>
                <span className="text-lg font-semibold">Tasks</span>
              </div>
              <div className="flex gap-3 m-auto">
                <div
                  id="shMoBtn1"
                  className="w-10 h-10 rounded-xl bg-white pt-3 border-blue-400 border hover:bg-blue-50 cursor-pointer transition"
                >
                  <img
                    id="prShMoBtnIcon1-b"
                    className="m-auto"
                    src="/img/nm1-b.svg"
                  />
                  <img
                    id="prShMoBtnIcon1-bl"
                    className="m-auto hidden"
                    src="/img/nm1-bl.svg"
                  />
                </div>
                <div
                  id="shMoBtn2"
                  className="w-10 h-10 rounded-xl bg-white pt-2.5 hover:bg-slate-200 cursor-pointer transition"
                >
                  <img
                    id="prShMoBtnIcon2-b"
                    className="m-auto"
                    src="/img/nm2-bl.svg"
                  />
                  <img
                    id="prShMoBtnIcon2-bl"
                    className="m-auto hidden"
                    src="/img/nm2-b.svg"
                  />
                </div>
                <div
                  id="shMoBtn3"
                  className="w-10 h-10 rounded-xl bg-white pt-2.5 hover:bg-slate-200 cursor-pointer transition"
                >
                  <img
                    id="prShMoBtnIcon3-b"
                    className="m-auto"
                    src="/img/nm3-bl.svg"
                  />
                  <img
                    id="prShMoBtnIcon3-bl"
                    className="m-auto hidden"
                    src="/img/nm3-b.svg"
                  />
                </div>
              </div>
              <div className="justify-end relative">
                <button className="absolute w-10 h-10 p-3 bg-white rounded-xl right-0 hover:bg-slate-200 cursor-pointer transition">
                  <img src="/img/filter.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div>
            <PN0001265 />
          </div>
        </div>
      </div>
    </>
  );
}
