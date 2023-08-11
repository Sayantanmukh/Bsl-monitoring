import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";

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
