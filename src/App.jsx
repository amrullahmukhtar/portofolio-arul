import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./componen/navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./page/home";
// import MyProject from "./page/myProject";
import Contact from "./page/contact";

function App() {
  return (
    <>
      <Navbar />
      {/* apa aja */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        {/* <Route path="/myProject" element={<MyProject />}></Route> */}
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
