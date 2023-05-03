import "./App.css";
import { LeftHalf } from "./LeftHalf";
import { RightHalf } from "./RighHalf";
import { Footer } from "./Footer";

function App() {
  return (
    <>
      <div className="main">
        <LeftHalf />
        <RightHalf />
      </div>
      <Footer />
    </>
  );
}

export default App;
