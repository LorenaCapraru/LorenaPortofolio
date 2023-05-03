import "./App.css";

import { Timeline } from "./Timeline";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { IndexPage } from "./IndexPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
