/* eslint-disable react/prop-types */
// import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import api from "../service/api";

export default function Dashboard({ classMode }) {
  const {
    data: worklloadCards,
    isloading: WCLoading,
    error: WCError,
  } = useQuery(["worklloadCards"], async () => {
    const response = await api.get("worklloadCards");
    return response.data;
  });

  const {
    data: dashboardProjects,
    isloading: DPLoading,
    error: DPError,
  } = useQuery(["dashboardProjects"], async () => {
    const response = await api.get("dashboardProjects");
    return response.data;
  });

  const {
    data: dashboardNE,
    isloading: NELoading,
    error: NEError,
  } = useQuery(["dashboardNE"], async () => {
    const response = await api.get("dashboardNE");
    return response.data;
  });

  const {
    data: activityStream,
    isLoading: ASLoading,
    error: ASError,
  } = useQuery(["activityStream"], async () => {
    const response = await api.get("activityStream");
    return response.data;
  });

  if (WCLoading || DPLoading || NELoading || ASLoading) return "Loading...";
  if (WCError || DPError || NEError || ASError)
    return (
      "An error has occurred: " + WCError ||
      DPError ||
      NEError ||
      ASError.message
    );

  return (
    <>
      <div className="flex justify-between">
        <div className="mt-10 max-[1000px]:mt-3">
          <span className="text-sm text-slate-400 font-semibold">
            Welcome back, Evan!
          </span>
          <h1
            className={`font-semibold text-4xl duration-300 mt-2 ${
              classMode ? "text-slate-950" : "text-white"
            }`}
          >
            Dashbord
          </h1>
        </div>
        <div dir="rtl" className="pt-2">
          <div
            className={`rounded-xl p-2 px-3 flex w-fit mt-16 duration-300 max-[1000px]:mt-4 max-[1000px]:mx-auto ${
              classMode ? "bg-slate-200" : "bg-slate-600"
            }`}
          >
            <span className={`duration-300 ${classMode ? "" : "text-white"}`}>
              Nov 16, 2020 - Dec 16, 2020
            </span>
            <img
              className="mr-2"
              src="/img/calender.svg"
              style={{
                filter: classMode ? "brightness(100%)" : "brightness(200)",
              }}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 pt-7 max-[1100px]:grid-cols-1">
        <div className="col-span-2">
          <div
            className={`rounded-3xl p-4 relative duration-300 ${
              classMode ? "bg-white" : "bg-slate-800"
            }`}
          >
            <div className="flex mt-2">
              <div className="justify-start">
                <span
                  className={`font-semibold text-lg duration-300 ${
                    classMode ? "" : "text-white"
                  }`}
                >
                  Workload
                </span>
              </div>
              <div className=" justify-end cursor-pointer absolute top-0 right-0 mt-7 mr-5">
                <div className="flex">
                  <a href="#" className="text-blue-400 text-sm font-semibold">
                    View all
                  </a>
                  <img className="ml-1" src="/img/arrow-b2.svg" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4 max-[1180px]:grid-cols-3 max-[1100px]:grid-cols-4 max-[700px]:grid-cols-3 max-[560px]:grid-cols-2 max-[410px]:grid-cols-1">
              {worklloadCards &&
                worklloadCards.map((wc) => (
                  <div
                    key={wc.name}
                    className={`rounded-3xl justify-center p-4 duration-300 ${
                      classMode ? "bg-slate-100" : "bg-slate-700"
                    }`}
                  >
                    <div className="m-auto w-fit relative mb-1">
                      <img className="" src={wc.ring} />
                      <img
                        className="absolute top-0 mt-1.5 ml-1.5 w-12"
                        src={wc.img}
                      />
                    </div>
                    <div className="m-auto">
                      <span
                        className={`text-sm font-semibold m-auto block w-fit duration-300 ${
                          classMode ? "" : "text-white"
                        }`}
                      >
                        {wc.name}
                      </span>
                      <span
                        className={`text-sm m-auto block w-fit duration-300 ${
                          classMode ? "text-slate-600" : "text-slate-400"
                        }`}
                      >
                        {wc.job}
                      </span>
                    </div>
                    <div className="m-auto cursor-pointer">
                      <span
                        className={`w-fit m-auto px-0.5 block text-sm rounded-md border-x border-y mt-1 hover:bg-slate-500 hover:text-white transition ${
                          classMode
                            ? "text-slate-500 border-slate-500"
                            : "text-slate-300 border-slate-300"
                        }`}
                      >
                        {wc.lvl}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="relative mt-10">
            <div className="flex mt-2 mb-4">
              <div className="justify-start ml-2">
                <span
                  className={`font-semibold text-lg duration-300 ${
                    classMode ? "" : "text-white"
                  }`}
                >
                  Project
                </span>
              </div>
              <div className=" justify-end cursor-pointer absolute top-0 right-0 mt-2 mr-5">
                <div className="flex">
                  <Link
                    to={"/project"}
                    href="pages/Project.html"
                    className="text-blue-400 text-sm font-semibold"
                  >
                    View all
                  </Link>
                  <img className="ml-1" src="/img/arrow-b2.svg" />
                </div>
              </div>
            </div>

            {dashboardProjects &&
              dashboardProjects.map((proj) => (
                <div
                  key={proj.serial}
                  className={`rounded-3xl grid grid-cols-2 max-[670px]:grid-cols-1 mb-4 duration-300 ${
                    classMode ? "bg-white" : "bg-slate-800"
                  }`}
                >
                  <div
                    className={`border-r max-[670px]:border-b max-[670px]:border-r-0 p-5 duration-300 ${
                      classMode ? "border-slate-200" : "border-slate-700"
                    }`}
                  >
                    <div className="flex">
                      <img src={proj.img} />
                      <div className="ml-4">
                        <span className="text-slate-400 text-sm">
                          {proj.serial}
                        </span>
                        <h1
                          className={`font-semibold duration-300 ${
                            classMode ? "" : "text-white"
                          }`}
                        >
                          {proj.title}
                        </h1>
                      </div>
                    </div>
                    <div className="flex mt-4 relative">
                      <div className="flex">
                        <img
                          className="w-4 mr-2 duration-100"
                          src="/img/calender.svg"
                          style={{
                            filter: classMode
                              ? "brightness(100%)"
                              : "brightness(200)",
                          }}
                        />
                        <span
                          className={`text-sm duration-300 ${
                            classMode ? "text-slate-500" : "text-slate-300 "
                          }`}
                        >
                          Created {proj.date}
                        </span>
                      </div>
                      <div dir="rtl" className="absolute right-0 top-0 m-">
                        <div className="flex w-fit justify-end" dir="ltr">
                          <img className="w-2.5" src={proj.arrow} />
                          <span className={`text-sm ml-2 ${proj.lvlClass}`}>
                            {proj.lvl}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-5 px-7">
                    <div>
                      <h1
                        className={`font-semibold mb-3 duration-300 ${
                          classMode ? "" : "text-white"
                        }`}
                      >
                        Project Data
                      </h1>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="">
                        <span className="text-sm text-slate-400">
                          All tasks
                        </span>
                        <h1
                          className={`font-semibold duration-300 ${
                            classMode ? "" : "text-white"
                          }`}
                        >
                          {proj.allTasks}
                        </h1>
                      </div>
                      <div>
                        <span className="text-sm text-slate-400">
                          Active tasks
                        </span>
                        <h1
                          className={`font-semibold duration-300 ${
                            classMode ? "" : "text-white"
                          }`}
                        >
                          {proj.activeTasks}
                        </h1>
                      </div>
                      <div>
                        <span className="text-sm text-slate-400">
                          Assignees
                        </span>
                        <div className="relative">
                          <img
                            className="w-5 absolute border-white border rounded-full"
                            src={proj.assignes1}
                          />
                          <img
                            className="w-5 absolute ml-4 border-white border rounded-full"
                            src={proj.assignes2}
                          />
                          <img
                            className="w-5 absolute ml-8 border-white border rounded-full"
                            src={proj.assignes3}
                          />
                          <div className="bg-blue-400 p-0.5 rounded-full w-5 h-5 text-white text-xs absolute ml-12">
                            +{proj.outherAssignes}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="col-span-1 pl-5 max-[1100px]:pl-0">
          <div
            className={`rounded-3xl p-4 duration-300 ${
              classMode ? "bg-white" : "bg-slate-800"
            }`}
          >
            <div className="relative">
              <div className="flex">
                <div className="justify-start">
                  <span
                    className={`font-semibold text-lg duration-300 ${
                      classMode ? "" : "text-white"
                    }`}
                  >
                    Nearest Event
                  </span>
                </div>
                <div className="justify-end cursor-pointer absolute top-0 right-0 mt-1.5 mr-3">
                  <div className="flex cursor-pointer">
                    <Link
                      to="/nearest-events"
                      href="pages/NE.html"
                      className="text-blue-400 text-sm font-semibold hover:text-blue-500 transition"
                    >
                      View all
                    </Link>
                    <img className="ml-1" src="/img/arrow-b2.svg" />
                  </div>
                </div>
              </div>
            </div>

            {dashboardNE &&
              dashboardNE.map((ne) => (
                <div
                  key={ne.title}
                  className={`${ne.border} border-l-4 rounded-sm px-3 pt-1 pb-3 mt-4`}
                >
                  <div className="grid grid-cols-3 relative">
                    <h1
                      className={`font-semibold col-span-2 duration-300 ${
                        classMode ? "" : "text-white"
                      }`}
                    >
                      {ne.title}
                    </h1>
                    <img
                      className="col-span-1 mt-1 absolute right-0 mr-2.5"
                      src={ne.arrow}
                    />
                  </div>
                  <div className="flex relative">
                    <div className="pt-3">
                      <span className="text-sm text-slate-400">
                        {ne.day} | {ne.hour}
                      </span>
                    </div>
                    {ne.time && (
                      <div
                        className={`rounded-md flex items-center p-2 h-fit absolute right-0 mt-2.5 duration-300 ${
                          classMode ? "bg-slate-100" : "bg-slate-600"
                        }`}
                      >
                        <img
                          src="/img/clock.svg"
                          style={{
                            filter: classMode
                              ? "brightness(100%)"
                              : "brightness(200)",
                          }}
                        />
                        <span
                          className={`ml-2 text-sm font-semibold duration-300 ${
                            classMode ? "text-slate-600" : "text-slate-100"
                          }`}
                        >
                          {ne.time}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
          <div className="pt-10">
            <div
              className={`rounded-3xl p-5 duration-300 ${
                classMode ? "bg-white" : "bg-slate-800"
              }`}
            >
              <h1
                className={`text-lg font-semibold duration-300 ${
                  classMode ? "" : "text-white"
                }`}
              >
                Activity Stream
              </h1>

              {activityStream &&
                activityStream.map((as) => (
                  <div key={as.name}>
                    <div className="flex pt-4">
                      <img src={as.img} />
                      <div className="ml-3">
                        <h1
                          className={`font-semibold duration-300 ${
                            classMode ? "" : "text-white"
                          }`}
                        >
                          {as.name}
                        </h1>
                        <span className="text-sm text-slate-400">{as.job}</span>
                      </div>
                    </div>
                    <div
                      className={`rounded-xl p-3 px-5 mt-3 flex items-start duration-300 ${
                        classMode ? "bg-slate-100" : "bg-slate-700"
                      }`}
                    >
                      <img className="mr-2 mt-1" src="/img/upload.svg" />
                      <span className={`${classMode ? "" : "text-white"}`}>
                        {as.update}
                      </span>
                    </div>
                    {as.link && (
                      <div
                        className={`rounded-xl p-3 px-5 mt-3 flex items-start duration-300 ${
                          classMode ? "bg-slate-100" : "bg-slate-700"
                        }`}
                      >
                        <img className="mr-2 " src="/img/gire.svg" />
                        <span className={`${classMode ? "" : "text-white"}`}>
                          {as.link}
                        </span>
                      </div>
                    )}
                  </div>
                ))}

              <div className="mt-3">
                <div className="flex w-fit m-auto cursor-pointer">
                  <a href="#" className="text-blue-400 font-semibold">
                    View more
                  </a>
                  <img className="ml-1.5 mt-1" src="/img/arrow-b.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
