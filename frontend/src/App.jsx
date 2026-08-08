import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Initial from "./pages/Initial/Initial.jsx";
import Home from "./pages/Home/Home.jsx";
import ListCharacter from "./pages/ListCharacter/ListCharacter.jsx";
import Rules from "./pages/Rules/Rules.jsx";
import Campaign from "./pages/Campaign/Campaign.jsx";
import MasterScreen from "./pages/MasterScreen/MasterScreen.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/home" element={<Home />} />
        <Route path="/list-character" element={<ListCharacter />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/master-screen" element={<MasterScreen />} />
      </Routes>
    </>
  );
}

export default App;
