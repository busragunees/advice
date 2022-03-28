import React, { useState, useEffect,useReducer } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Advice from "./pages/Advice";
import Favorites from "./pages/Favorites";
import {reducer, initialState} from "./components/Reducer";


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    console.log("app js bu",state.active)
  }, [state.active.id]);
  console.log("app js düz",state.active)
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <div className="container" style={{backgroundImage: "url(https://images.pexels.com/photos/416920/pexels-photo-416920.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200)" }}>
          <Routes>
            <Route path="/" element={<Advice />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route> 
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
// ReactDOM.render(<App />, document.getElementById("root"));
