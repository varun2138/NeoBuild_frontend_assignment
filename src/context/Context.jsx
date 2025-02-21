import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [bookings, setBookings] = useState(() => {
    return JSON.parse(localStorage.getItem("bookings")) || [];
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem("bookings", JSON.stringify(bookings));
  }, [bookings]);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setBookings([]);
    toast.success("user logged out successfully !");
  };
  return (
    <GlobalContext.Provider
      value={{ logout, user, setUser, bookings, setBookings }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  return useContext(GlobalContext);
};
