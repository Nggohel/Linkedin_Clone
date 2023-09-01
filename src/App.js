import { connect } from "react-redux";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Header from "./Components/Header";
import { getUserAuth } from "./actions";

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);

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

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
