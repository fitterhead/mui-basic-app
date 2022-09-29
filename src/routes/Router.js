import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import RequiredAuth from "../auth/RequiredAuth";
import LoginModal from "../components/LoginModal";
import Test from "../components/Test";

export default function Router() {
  const location = useLocation();
  console.log("router location", location);
  const state = location.state;

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginModal />} />
        <Route
          path=":detailId"
          element={
            <RequiredAuth>
              <DetailPage />
            </RequiredAuth>
          }
        />
      </Route>
    </Routes>
  );
}
