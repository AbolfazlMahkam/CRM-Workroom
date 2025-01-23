import Header from "./components/header";
import Menu from "./components/menu";
import Project from "./pages/project";
import Dashboard from "./pages/dashboard";
import NearestEvents from "./pages/nearest-events";
import MenuResponsive from "./components/menu-responsive";
import Search from "./pages/search";
import Loading from "./components/loading";
import Support from "./components/support";

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useDarkMode } from "./hook/useDarkMode";

const queryClient = new QueryClient();

export default function App() {
  const [showResponsiveMenu, setShowResponsiveMenu] = React.useState(false);
  const [showSupport, setShowSupport] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const { mode } = useDarkMode();
  const classMode = mode === "light";
 
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <div
              className={`grid grid-cols-12 max-[1100px]:grid-cols-1 duration-300 ${
                classMode ? "bg-slate-100" : "bg-slate-900"
              }`}
            >
              <div className="p-5 col-span-2 max-[1100px]:hidden">
                <Menu setShowSupport={setShowSupport} classMode={classMode} />
              </div>
              <div className="p-5 pl-0 col-span-10 max-[1100px]:pl-5">
                <Header
                  setShowResponsiveMenu={setShowResponsiveMenu}
                  classMode={classMode}
                />
                <Routes>
                  <Route
                    path="/"
                    element={<Navigate to="/dashboard" />}
                    classMode={classMode}
                  />
                  <Route
                    path="/dashboard"
                    element={<Dashboard classMode={classMode} />}
                  />
                  <Route
                    path="/project"
                    element={<Project classMode={classMode} />}
                  />
                  <Route
                    path="/nearest-events"
                    element={<NearestEvents classMode={classMode} />}
                  />
                  <Route
                    path="/search"
                    element={<Search classMode={classMode} />}
                  />
                </Routes>
              </div>
            </div>
            {showResponsiveMenu && (
              <MenuResponsive
                setShowResponsiveMenu={setShowResponsiveMenu}
                setShowSupport={setShowSupport}
                classMode={classMode}
              />
            )}
            {showSupport && (
              <Support
                setShowSupport={setShowSupport}
                showSupport={showSupport}
                classMode={classMode}
              />
            )}
          </BrowserRouter>
        </QueryClientProvider>
      )}
    </>
  );
}
