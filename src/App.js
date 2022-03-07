
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/header/NavBar";
import LogIn from "./pages/LogIn";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Featured from "./components/Featured/Featured";
import ExtraLinks from "./components/header/ExtraLinks/ExtraLinks";
import Footer from "./components/Footer/footer";
import Testimonials from './pages/Testimonial'

function App() {
  return (

    <Router>
      <Navbar />
      <ExtraLinks />
      <Routes>
      <Route exact path="/" element={<Featured/>} > </Route>
      
      <Route exact path="/logIn" element={<LogIn/>} > </Route>
      <Route path="/about" element={About} />
      <Route path="/contact" element={Contact} />
      <Route path="/signUp" element={SignUp} />
      <Route exact path="/testimonials" element={<Testimonials/>} > </Route>
    </Routes>
      
      <Footer />

     
    </Router>
  );
}
export default App;
