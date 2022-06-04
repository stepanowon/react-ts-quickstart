import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import SongList from "./pages/SongList";
import Members from "./pages/Members";
import { useState } from "react";

export type MemberType = { name: string; photo: string };

const App = () => {
  const [members] = useState<Array<MemberType>>([
    { name: "Maggie Adams", photo: "photos/Mag.png" },
    { name: "Sammie Purcell", photo: "photos/Sam.png" },
    { name: "Tim Purcell", photo: "photos/Tim.png" },
    { name: "Scott King", photo: "photos/King.png" },
    { name: "Johnny Pike", photo: "photos/JPike.jpg" },
    { name: "Toby Ruckert", photo: "photos/Toby.jpg" },
  ]);

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About title={"여우와 늙다리들"} />} />
          <Route path="/members" element={<Members members={members} />} />
          <Route path="/songs" element={<SongList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
