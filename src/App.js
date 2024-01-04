import './App.css';
import Bookmark from './Bookmark';
import Home from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/bookmark" element={<Bookmark />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
