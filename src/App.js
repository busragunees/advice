import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Advice from "./pages/Advice";
import Favorites from "./pages/Favorites";


function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Advice />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route> 
           {/* favori advice'ların tutlacağı page eklenecek.  */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
