import { lazy } from "react";
import { useSinglePrismicDocument } from "@prismicio/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home.js"));
const ParkoljTeIs = lazy(() => import("./pages/ParkoljTeIs.js"));
const KivulTagasabb = lazy(() => import("./pages/KivulTagasabb.js"));

import "./App.scss";

function App() {
  const [cms] = useSinglePrismicDocument("szabadteraszt");
  const cmsData = cms?.data;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home cmsData={cmsData} />} />
        <Route
          path="/parkoljteis"
          element={<ParkoljTeIs cmsData={cmsData} />}
        />
        <Route
          path="/kivultagasabb"
          element={<KivulTagasabb cmsData={cmsData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
