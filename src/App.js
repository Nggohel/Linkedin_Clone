import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>

          <Route exact path="/home" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

function HomeLayout() {
  return (
    <>
      <Outlet />
      <Home></Home>
      <Header />
    </>
  );
}
export default App;
