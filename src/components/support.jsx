/* eslint-disable react/prop-types */
export default function Support({ setShowSupport, classMode }) {
  const handleCloseSupport = () => {
    setShowSupport(false);
  };
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-opacity-50 backdrop-blur-sm flex items-center justify-center px-10 z-10 ${
          classMode ? "bg-blue-50" : "bg-blue-950"
        }`}
      >
        <div
          className={`col-span-1 p-4 pb-8 rounded-3xl ${
            classMode ? "bg-white" : "bg-slate-800"
          }`}
        >
          <div className="flex justify-between">
            <span
              className={`font-semibold pt-5 pl-5 ${
                classMode ? "text-blue-950" : "text-white"
              }`}
            >
              Need some Help?
            </span>
            <button
              className={`p-1.5 rounded-xl w-9 h-9 cursor-pointer ${
                classMode
                  ? "bg-slate50 hover-slate-100"
                  : "bg-slate-700 hover:bg-slate-600"
              }`}
              onClick={handleCloseSupport}
            >
              <img
                src="/img/close.svg"
                style={{
                  filter: classMode ? "brightness(0)" : "brightness(200)",
                }}
              />
            </button>
          </div>
          <img className="px-5" src="/img/illustration.png" />
          <div className="px-5 pt-4">
            <p
              className={`text-sm ${
                classMode ? "text-blue-950" : "text-blue-50"
              }`}
            >
              Describe your question and our specialists will answer you within
              24 hours.
            </p>
            <div className="pt-4">
              <h1
                className={`text-slate-400 text-xs mb-2 font-semibold ${
                  classMode ? "text-slate-400" : "text-slate-300"
                }`}
              >
                Request Subject
              </h1>
              <select
                className={`rounded-xl p-2 w-full text-xs ${
                  classMode
                    ? "bg-slate-100 text-slate-500"
                    : " bg-slate-700 text-slate-300"
                }`}
                name=""
                id=""
              >
                <option value="Title">Technical difficulites</option>
              </select>
            </div>
            <div className="pt-4">
              <h1
                className={`text-slate-400 text-xs mb-2 font-semibold ${
                  classMode ? "text-slate-400" : "text-slate-300"
                }`}
              >
                Description
              </h1>
              <textarea
                className={`rounded-xl border p-2 w-full text-xs ${
                  classMode
                    ? "border-slate-300 text-slate-400"
                    : "border-slate-500 bg-slate-700 text-slate-400"
                }`}
                placeholder="Add some description of the request"
                name=""
                id=""
                cols="30"
                rows="4"
              ></textarea>
            </div>
            <div className="flex justify-end pt-4">
              <button
                href="#"
                id="sendSupport"
                className="bg-blue-500 rounded-xl py-2 px-3 shadow-md shadow-blue-700 hover:drop-shadow-lg transition duration-300 text-white font-semibold"
                onClick={handleCloseSupport}
              >
                Send Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
