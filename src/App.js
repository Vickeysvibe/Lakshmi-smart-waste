import { Route, Routes } from "react-router-dom";
import SideBar from "./Components/SideBar";
import Homepage from "./Pages/Homepage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/predictions" element={<Homepage />} />
      <Route path="/schedules" element={<Homepage />} />
      <Route path="/routes" element={<Homepage />} />
    </Routes>
  );
};
export default App;
