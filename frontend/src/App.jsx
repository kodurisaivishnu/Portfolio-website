import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import PublicLayout from "./layouts/PublicLayout.jsx";
import Homepage from "./pages/Homepage.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<PublicLayout />} >
        <Route index element={<Homepage/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
