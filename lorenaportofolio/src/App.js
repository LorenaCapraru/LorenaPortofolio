import "./App.css";
import { LeftHalf } from "./LeftHalf";
import { RightHalf } from "./RighHalf";
import { Footer } from "./Footer";
import { Timeline } from "./Timeline";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="main">
        <LeftHalf />
        <RightHalf />
      </div>
      <Footer />
      <Router>
        <Routes>
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
