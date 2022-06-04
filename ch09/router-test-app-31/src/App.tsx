import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import SongList from "./pages/SongList";
import Members from "./pages/Members";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About title={"여우와 늙다리들"} />} />
          <Route path="/members" element={<Members />} />
          <Route path="/songs" element={<SongList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
