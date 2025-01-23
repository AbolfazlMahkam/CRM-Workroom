/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

export default function MenuResponsive({
  setShowResponsiveMenu,
  setShowSupport,
  classMode,
}) {
  const handleCloseMenu = () => {
    setShowResponsiveMenu(false);
  };

  const handleOpenMenu = () => {
    setShowResponsiveMenu(false);
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
        className={`fixed top-0 left-0 w-full h-full bg-opacity-50 backdrop-blur-sm flex items-center justify-center px-10 z-10 ${
          classMode ? "bg-blue-50" : "bg-blue-950"
        }`}
      >
        <div
          className={`w-full rounded-3xl py-9 duration-300 max-[1100px]:mb-10 relative ${
            classMode ? "bg-white" : "bg-slate-800"
          }`}
        >
          <img
            className=" ml-6 mb-8"
            src="/img/Company's logo.svg"
            alt="Logo"
          />
          <button
            className={`rounded-xl p-1.5 absolute top-0 right-0 m-3 duration-300 cursor-pointer ${
              classMode
                ? "bg-white hover:bg-slate-200"
                : "bg-slate-700 hover:bg-slate-600"
            }`}
            onClick={handleCloseMenu}
          >
            <img
              src="/img/close.svg"
              className="duration-300"
              style={{
                filter: classMode ? "brightness(none)" : "brightness(200)",
              }}
            />
          </button>

          <div>
            {menu &&
              menu.map((menu) => (
                <div
                  key={menu.title}
                  className="px-4 relative my-1 h-fit z-20"
                  onClick={handleCloseMenu}
                >
                  <NavLink to={`/${menu.title}`}>
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
                          src={
                            isActive ? `${menu.src}-a.svg` : `${menu.src}.svg`
                          }
                          style={
                            isActive
                              ? {}
                              : {
                                  filter: classMode
                                    ? "brightness(none)"
                                    : "brightness(200)",
                                }
                          }
                        />
                        <span
                          className={
                            isActive
                              ? "text-sm ml-3 font-semibold text-blue-500"
                              : "text-sm ml-3 font-semibold text-[#7D8492]"
                          }
                          style={
                            isActive ? {} : { color: classMode ? "" : "#fff" }
                          }
                        >
                          {menu.title}
                        </span>
                      </button>
                    )}
                  </NavLink>
                </div>
              ))}
          </div>

          <div className="absolute bottom-0 mb-2 w-full max-[1100px]:relative">
            <div className="px-4 justify-center relative pt-11 items-end h-fit">
              <div className="w-full flex justify-center">
                <img className="ml-2 absolute" src="/img/illustration.svg" />
              </div>
              <div
                className={`justify-center mt-12 rounded-xl h-40 pt-24 min-w-full ${
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
                    onClick={handleOpenMenu}
                  >
                    <img src="/img/support.svg" />
                    <span className="text-white ml-2">Support</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="px-4 relative my-1 h-fit">
              <NavLink to="/">
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
                      style={
                        isActive
                          ? {}
                          : {
                              filter: classMode
                                ? "brightness(none)"
                                : "brightness(200)",
                            }
                      }
                    />
                    <span
                      className={
                        isActive
                          ? "text-sm ml-3 font-semibold text-blue-500"
                          : "text-sm ml-3 font-semibold text-[#7D8492]"
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
      </div>
    </>
  );
}
