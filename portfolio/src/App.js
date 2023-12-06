import { Component } from "react";
import "./App.css";
import {About} from "./portfolio/about/about";
import {Certificate} from "./portfolio/certificate/certificate";
import {Contact} from "./portfolio/contact/contact";
import {Home} from "./portfolio/home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Education } from "./portfolio/education/education";
import { Skills } from "./portfolio/skills/skills";
import { Menu } from "./menu";
function App() {
  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={[<Menu/>,<Home/>,<About/>,<Education/>,<Skills/>,<Certificate/>,<Contact/>]}/>
      <Route path="/about" element={[<Menu/>,<About/>]}/>
      <Route path="/certificate" element={[<Menu/>,<Certificate/>]}/>
      <Route path="/education" element={[<Menu/>,<Education/>]}/>
      <Route path="/contact" element={[<Menu/>,<Contact/>]}/>
      <Route path="/skills" element={[<Menu/>,<Skills/>]}/>
    </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
