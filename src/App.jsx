import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home/>}>
        
      </Route>
    </Routes>
    </div>
  );
};

export default App;
