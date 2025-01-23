/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { nearestEvents } from "../data/nerest-events";

export default function NearestEvents({ classMode }) {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-full flex justify-between items-center">
          <div className="mt-10 max-[1000px]:mt-4 relative">
            <div>
              <Link to="/dashboard" className="flex cursor-pointer">
                <img src="/img/arrow-b3.svg" className="mr-1" />
                <span className="text-blue-400 text-sm hover:text-blue-500 transition">
                  Back to Dashboard
                </span>
              </Link>
            </div>
            <h1
              className={`font-semibold text-4xl mt-2 duration-300 ${
                classMode ? "" : "text-white"
              }`}
            >
              Nearest Events
            </h1>
          </div>

          <button className="bg-blue-500 p-2 rounded-xl mt-4 hover:bg-blue-600 shadow-blue-800 hover:shadow-lg duration-300 flex justify-center items-center">
            <img className="mr-1 w-3" src="/img/ne-plus.svg" />
            <p className="text-white">Add Event</p>
          </button>
        </div>
      </div>
      <div className="pt-7">
        <div className="grid grid-cols-2 gap-5 max-[1100px]:grid-cols-1">
          {nearestEvents &&
            nearestEvents.map((ne) => (
              <div
                key={ne.title}
                className={`rounded-2xl p-5 duration-300 ${
                  classMode ? "bg-white" : "bg-slate-800"
                }`}
              >
                <div
                  className={`${ne.border} border-l-4 rounded-sm pl-4 pr-0 py-2`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center w-full">
                      <img src={ne.icon} />
                      <p
                        className={`font-semibold col-span-2 ml-2 duration-300 ${
                          classMode ? "" : "text-white"
                        }`}
                      >
                        {ne.title}
                      </p>
                    </div>
                    <img className="" src={ne.arrow} />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="pt-3">
                      <span className="text-sm text-slate-400">
                        {ne.day} | {ne.hour}
                      </span>
                    </div>
                    <div
                      className={`rounded-md flex items-center p-2 h-fit mt-2 duration-300 ${
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
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
