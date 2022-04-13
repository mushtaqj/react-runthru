import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateBlog from "./components/CreateBlog";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* Router logic */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateBlog />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
