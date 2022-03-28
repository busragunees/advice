import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Advice from "./pages/Advice";
import Favorites from "./pages/Favorites";


function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <div className="container" style={{backgroundImage: "url(https://images.hdqwalls.com/download/dark-blue-green-gradient-4k-i4-1366x768.jpg)" }}>
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
