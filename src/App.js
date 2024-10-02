import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default App;
