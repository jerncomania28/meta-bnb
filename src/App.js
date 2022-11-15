import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PlaceToStay from "./pages/PlaceToStay";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place-to-stay" element={<PlaceToStay />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
