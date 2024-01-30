import React, { useState } from "react";
import headerInfo from "./HeaderFooterComp/HeaderInfo";
import Footer from "./HeaderFooterComp/Footer";
import Header from "./HeaderFooterComp/Header";
import ContentPageOne from "./ContentElem/ContentPageOne";
import ContentPageTwo from "./ContentElem/ContentPageTwo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ExitWindow from "./ContentElem/ContentPageOne/ExitWindow";
import Settings from "./ContentElem/ContentPageOne/Settings";
import SettingProperties from "./ContentElem/ContentPageOne/SettingProperties";
import Help from "./ContentElem/ContentPageOne/Help"
import LoadModel from "./ContentElem/ContentPageOne/LoadModel";

export default function App() {
  const [settingPropertie, setSettingPropertie] = useState(SettingProperties);
  return (
    <div className="position-relative">
      <Router>
        <div
          className="btn-group br_bt d-flex fixed-top bg-white"
          role="group"
          aria-label="Basic outlined example"
          style={{ borderBottom: "2px solid #6f47d7" }}
        >
          <Header name={headerInfo} />
        </div>
        <Routes>
          <Route path="/" element={<ContentPageOne />} />
          <Route
            path="/NewModel"
            element={<ContentPageTwo settingPropertie={settingPropertie} />}
          />
          <Route path="/LoadModel" element={<LoadModel />} />
          <Route
            path="/Settings"
            element={
              <Settings
                settingPropertie={settingPropertie}
                setSettingPropertie={setSettingPropertie}
              />
            }
          />
          <Route path="/help" element={<Help />}/>
          <Route path="/Exit" element={<ExitWindow />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}
