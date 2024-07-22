import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Inputform from "./components/Students/Inputform";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/students" element={<Inputform />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
