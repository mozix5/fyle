import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Repositories from "./components/Repositories";
import { DataProvider } from "./context/DataContext";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-[#171717] min-h-screen">
      <DataProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Repositories />} />
            <Route index path="/:pageNo" element={<Repositories />} />
          </Route>
        </Routes>
      </DataProvider>
    </div>
  );
};

export default App;
