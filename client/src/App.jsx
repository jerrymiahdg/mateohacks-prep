import { createContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Student from "./components/Student";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "./firebase";
import Teacher from "./components/Teacher";
import AddItem from "./components/AddItem";

export const Context = createContext();

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => setUser(user));
  }, []);

  return (
    <>
      <Context.Provider value={{ user: user, setUser: setUser }}>
        <Nav />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Student />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/add-item" element={<AddItem />} />
        </Routes>
      </Context.Provider>
    </>
  );
}

export default App;
