import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import RequiredAuth from "../auth/RequiredAuth";
import LoginModal from "../components/LoginModal";
export default function Router() {
  const location = useLocation();
  console.log("router location", location);
  const state = location.state;

  return (
    <>
      <Routes id="homepage" location={state?.backgroundLocation || location}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route id="login" path="/login" element={<LoginModal />} />
        </Route>
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route
            id="modal"
            path="jobs/:detailId"
            element={
              <RequiredAuth>
                <DetailPage />
              </RequiredAuth>
            }
          />
        </Routes>
      )}

      {state?.backgroundLocation && (
        <Routes>
          <Route id="login" path="/login" element={<LoginModal />} />
        </Routes>
      )}
    </>
  );
}
