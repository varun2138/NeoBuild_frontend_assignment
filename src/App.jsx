import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Booking from "./pages/Booking";
import { useGlobal } from "./context/Context";
import { ToastContainer } from "react-toastify";

const App = () => {
  const { user } = useGlobal();
  return (
    <div className="font-nunito">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="/booking" /> : <Login />}
          />
          <Route
            path="/booking"
            element={user ? <Booking /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
