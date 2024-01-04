import Bookmark from './Bookmark';
import Home from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
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
