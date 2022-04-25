import React from 'react';
import "./index.css"
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Header from "./Components/Header";
import About from "./Components/About";
import Catalog from "./Components/Catalog";
import Home from "./Components/Home/Home";
import Counter from "./Components/ Counter";
import Welcome from "./Components/Welcome";
import Users from "./Components/Users";
import TodoList from "./Components/TodoList";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/counter" element={<Counter/>}/>
          <Route path="/welcome" element={<Welcome/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/TodoList" element={<TodoList/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
