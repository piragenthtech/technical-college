import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Inputform from "./components/Students/Inputform";
import Testform from "./components/Testform";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/students" element={<Inputform />}></Route>
        </Routes>
      </Router>
      <Inputform />
      <Testform />
    </>
  );
}

export default App;
