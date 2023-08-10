import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Main from "./pages/Main";

// import { Home } from "./components/Pages/Home";
// import { About } from "./components/Pages/About";
// import { Blog } from "./components/Pages/Blog";
// import { Contact } from "./components/Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Main />

        <div className="pages">
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/about" element={<></>} />
            <Route path="/blog" element={<></>} />
            <Route path="/contact" element={<></>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
